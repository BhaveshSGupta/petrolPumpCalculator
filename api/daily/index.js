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

const calculationsfordb = (inputData, previousdata) => {
    let calculations = {}

    if (!!previousdata) {
        // console.log({ previousdata })
        calculations = {
            "total_petrol": ((parseFloat(inputData.Closing_Reading_MS_Dispenser_1_Nozle_1) - parseFloat(previousdata.Closing_Reading_MS_Dispenser_1_Nozle_1)) + (parseFloat(inputData.Closing_Reading_MS_Dispenser_1_Nozle_2) - parseFloat(previousdata.Closing_Reading_MS_Dispenser_1_Nozle_2)) - (parseFloat(inputData.Testing_MS_Dispenser_1_Nozle_1) + parseFloat(inputData.Testing_MS_Dispenser_1_Nozle_2))).toFixed(4),
            "total_deisel":
                ((parseFloat(inputData.Closing_Reading_HSD_Dispenser_1_Nozle_1) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_1_Nozle_1)) +
                    (parseFloat(inputData.Closing_Reading_HSD_Dispenser_1_Nozle_2) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_1_Nozle_2)) +
                    (parseFloat(inputData.Closing_Reading_HSD_Dispenser_2_Nozle_1) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_2_Nozle_1)) +
                    (parseFloat(inputData.Closing_Reading_HSD_Dispenser_2_Nozle_2) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_2_Nozle_2)) + (parseFloat(inputData.Closing_Reading_HSD_Dispenser_3_Nozle_1) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_3_Nozle_1)) +
                    (parseFloat(inputData.Closing_Reading_HSD_Dispenser_3_Nozle_2) - parseFloat(previousdata.Closing_Reading_HSD_Dispenser_3_Nozle_2)) - (parseFloat(inputData.Testing_HSD_Dispenser_1_Nozle_1) + parseFloat(inputData.Testing_HSD_Dispenser_1_Nozle_2) + parseFloat(inputData.Testing_HSD_Dispenser_2_Nozle_1) + parseFloat(inputData.Testing_HSD_Dispenser_2_Nozle_2) + parseFloat(inputData.Testing_HSD_Dispenser_3_Nozle_1) + parseFloat(inputData.Testing_HSD_Dispenser_2_Nozle_2))).toFixed(4),
            "previous": previousdata._id
        }

    }
    // console.log(inputData)
    // console.log(calculations)
    return {
        ...inputData,
        ...calculations,
        "Volume_in_MS": (calVolofPetrol(inputData.MS_DIP)).toFixed(0),
        "Volume_in_HSD_DIP1": (calVolofDiesel(inputData.HSD_DIP1)).toFixed(0),
        "Volume_in_HSD_DIP2": (calVolofDiesel(inputData.HSD_DIP2)).toFixed(0),
        "ABS_Volume_in_MS": calVolofPetrol(inputData.MS_DIP),
        "ABS_Volume_in_HSD_DIP1": calVolofDiesel(inputData.HSD_DIP1),
        "ABS_Volume_in_HSD_DIP2": calVolofDiesel(inputData.HSD_DIP2),
    }
}

app.post('/api/daily', async (request, response) => {
    connect('Daily')

    allPreviousData = await dailyData.find().sort({ Date: 'desc' }).limit(1).lean()
    allPreviousData = allPreviousData[0]
    datatopush = { ...calculationsfordb(request.body, allPreviousData) }

    const dailydata = new dailyData({
        ...datatopush
    })
    try {
        const idCurrent = await dailydata.save()

        if (!!allPreviousData && allPreviousData._id !== '') {
            await dailyData.findByIdAndUpdate(allPreviousData._id, {
                "next": idCurrent.id
            })
        }
        response.status(201).send(idCurrent)
    } catch (e) {
        response.status(400).send(e)
    }
    disconnect('daily')
})


app.put('/api/daily', async (request, response) => {
    connect('Daily')
    let allPreviousData = []
    await Promise.all(result.Sheet1.forEach(async element => {
        if (!allPreviousData) {
            allPreviousData = await dailyData.find().sort({ Date: 'desc' }).limit(1).lean()
            allPreviousData = allPreviousData[0]
        }
        const datatopush = { ...calculationsfordb(element, allPreviousData) }
        const dailydata = new dailyData({
            ...datatopush
        })
        try {
            const idCurrent = await dailydata.save()

            if (!!allPreviousData && allPreviousData._id !== '') {
                await dailyData.findByIdAndUpdate(allPreviousData._id, {
                    "next": idCurrent.id
                })
            }
            allPreviousData = idCurrent
            console.log("added")
        } catch (e) {
            console.log("error")
        }
    }))

    disconnect('Daily')
    response.send('dataAdded')

})

module.exports = app
