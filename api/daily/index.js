const { convertedData: volumneStaticData, connect, disconnect } = require("../utils")
const dailyData = require("../models/daily")
const app = require('../app')
const auth = require('../authentication')
const parser = require("convert-excel-to-json");
const path = require("path");

const result = parser({
    sourceFile: path.join(__dirname, "../data/data.xlsx"),
    header: {
        rows: 1
    },
    columnToKey: {
        "*": "{{columnHeader}}"
    }
});

const calVolofPetrol = (number) => {
    const intNumber = parseInt(number)
    // console.log(intNumber)
    if (intNumber < number) {
        return (number - intNumber) * 10 * volumneStaticData.MS[intNumber - 1].DIFFERENCE + volumneStaticData.MS[intNumber - 1].VOLUME
    }
    return volumneStaticData.MS[intNumber - 1].VOLUME
}

const calVolofDiesel = (number) => {
    const intNumber = parseInt(number)
    if (intNumber < number) {
        return (number - intNumber) * 10 * volumneStaticData.HSD[intNumber - 1].DIFFERENCE + volumneStaticData.HSD[intNumber - 1].VOLUME
    }
    return volumneStaticData.HSD[intNumber - 1].VOLUME
}

app.get('*', async (req, res) => {
    connect('Daily')
    const sort = {}
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        const data = await dailyData.find(
            {}, null, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
        )
        disconnect('daily')
        res.status(200).send(data)

    } catch (e) {
        disconnect('dailyCatch')
        res.status(500).send()
    }
})


app.post('/api/daily', auth, async (request, response) => {

    connect('Daily')

    const inputData = {
        ...request.body
    }
    let allPreviousData = {}
    try {
        allPreviousData = await dailyData.findOne()
        if (!allPreviousData) {
            allPreviousData = {}
            allPreviousData._id = ''
        }
    } catch {
        allPreviousData._id = ''
    }
    const dailydata = new dailyData({
        ...request.body,
        "Volume_in_MS": (calVolofPetrol(inputData.MS_DIP)).toFixed(0),
        "Volume_in_HSD_DIP1": (calVolofDiesel(inputData.HSD_DIP1)).toFixed(0),
        "Volume_in_HSD_DIP2": (calVolofDiesel(inputData.HSD_DIP2)).toFixed(0),
        "ABS_Volume_in_MS": calVolofPetrol(inputData.MS_DIP),
        "ABS_Volume_in_HSD_DIP1": calVolofDiesel(inputData.HSD_DIP1),
        "ABS_Volume_in_HSD_DIP2": calVolofDiesel(inputData.HSD_DIP2),
        "previous": allPreviousData._id,
        "next": ''
    })
    try {
        const idCurrent = await dailydata.save()

        if (allPreviousData._id !== '') {
            const test = await dailyData.findByIdAndUpdate(allPreviousData.id, {
                "next": idCurrent.id
            })
        }
        response.status(201).send(dailydata)
    } catch (e) {
        response.status(400).send(e)
    }
    disconnect('dailyCatch')
})


app.put('/api/daily', async (request, response) => {
    connect('Daily')
    await Promise.all(result.Sheet1.map(async element => {
        const inputData = {
            ...element
        }
        let allPreviousData = {}
        try {
            allPreviousData = await dailyData.findOne()
            if (!allPreviousData) {
                allPreviousData = {}
                allPreviousData._id = ''
            }
        } catch {
            allPreviousData._id = ''
        }
        const dailydata = new dailyData({
            ...element,
            "Volume_in_MS": (calVolofPetrol(inputData.MS_DIP)).toFixed(0),
            "Volume_in_HSD_DIP1": (calVolofDiesel(inputData.HSD_DIP1)).toFixed(0),
            "Volume_in_HSD_DIP2": (calVolofDiesel(inputData.HSD_DIP2)).toFixed(0),
            "ABS_Volume_in_MS": calVolofPetrol(inputData.MS_DIP),
            "ABS_Volume_in_HSD_DIP1": calVolofDiesel(inputData.HSD_DIP1),
            "ABS_Volume_in_HSD_DIP2": calVolofDiesel(inputData.HSD_DIP2),
            "previous": allPreviousData._id,
            "next": ''
        })

        const idCurrent = await dailydata.save()

        if (allPreviousData._id !== '') {
            const test = await dailyData.findByIdAndUpdate(allPreviousData.id, {
                "next": idCurrent.id
            })
        }
        return ''

    }))
    response.send('dataAdded')


})

module.exports = app
