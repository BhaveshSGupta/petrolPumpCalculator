const volumneStaticData = require("../excelConverter")
const Dailydata = require("../models/dailyData")
const app = require("../app")
const mongoose = require("mongoose")
const calVolofPetrol = (number) => {
    console.log(volumneStaticData)
    const intNumber = parseInt(number)
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
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    const sort = {}
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    // console.log(sort)
    try {
        const data = await Dailydata.find(
            {}, null, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
        )
        mongoose.disconnect()
        res.status(200).send(data)

    } catch (e) {
        mongoose.disconnect()
        res.status(500).send()
    }
})


app.post('*', async (request, response) => {

    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    const inputData = {
        ...request.body
    }
    let allPreviousData = {}
    try {
        allPreviousData = await Dailydata.findOne({
            'next': ''
        })
        if (!allPreviousData) {
            allPreviousData = {}
            allPreviousData._id = ''
        }
    } catch {
        allPreviousData._id = ''
    }
    const dailydata = new Dailydata({
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
            const test = await Dailydata.findByIdAndUpdate(allPreviousData.id, {
                "next": idCurrent.id
            })
        }
        response.status(201).send(dailydata)
    } catch (e) {
        response.status(400).send(e)
    }
    mongoose.disconnect()
})
module.exports = app
