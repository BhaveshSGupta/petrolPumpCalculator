const volumneStaticData = require("../excelConverter")
const Dailydata = require("../models/dailyData")
const app = require("../app")
const mongoose = require("mongoose")
const calVolofPetrol = (number) => {
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

app.get('*', (req, res) => {
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    mongoose.disconnect()
    res.send('Api Chal rahi hai')
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
        response.status(201).send(dailydata, { "dateString": inputData.date  })
    } catch (e) {
        response.status(400).send(e)
    }
    mongoose.disconnect()
})
module.exports = app
