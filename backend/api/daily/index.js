// const mongoose = require('mongoose')
// require('./db/mongoose')
// const express = require('express')
const volumneStaticData = require("../../excelConverter")
const Dailydata = require("../../models/dailyData")
const app = require("../../app")
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

// const port = process.env.PORT

app.get('*', (req, res) => {
    const mongoose = require("mongoose")

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
    const mongoose = require("mongoose")

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
            // console.log({
            //   allPreviousData
            // })
        }
    } catch {
        con
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
        "date": new Date(),
        "next": ''
    })
    try {
        const idCurrent = await dailydata.save()

        if (allPreviousData._id !== '') {
            // await Dailydata.findByIdAndUpdate({'next':''})
            const test = await Dailydata.findByIdAndUpdate(allPreviousData.id, {
                "next": idCurrent.id
            })
            // await test.save()
            // console.log({test})
        }
        response.status(201).send(dailydata)
    } catch (e) {
        response.status(400).send(e)
    }
    mongoose.disconnect()
    // response.send({"recived":true})
})
module.exports = app

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))