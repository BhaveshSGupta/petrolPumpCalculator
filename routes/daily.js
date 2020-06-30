const express = require('express')
const router = new express.Router()
const volumneStaticData = require('../excelConverter/index')
const Dailydata = require('../models/dailyData')

const calVolofPetrol = (number) => {
  const intNumber = parseInt(number)
  if (intNumber < number) {
    return ((number - intNumber) * volumneStaticData.MS[intNumber - 1].DIFFERENCE + volumneStaticData.MS[intNumber - 1].VOLUME).toFixed(0)
  }
  return (volumneStaticData.MS[intNumber - 1].VOLUME).toFixed(0)
}

const calVolofDiesel = (number) => {
  const intNumber = parseInt(number)
  if (intNumber < number) {
    return ((number - intNumber) * volumneStaticData.HSD[intNumber - 1].DIFFERENCE + volumneStaticData.HSD[intNumber - 1].VOLUME).toFixed(0)
  }
  return (volumneStaticData.HSD[intNumber - 1].VOLUME).toFixed(0)
}

router.post('/daily', async (request, response) => {
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
    "Volume_in_MS": calVolofPetrol(inputData.MS_DIP),
    "Volume_in_HSD_DIP1": calVolofDiesel(inputData.HSD_DIP1),
    "Volume_in_HSD_DIP2": calVolofDiesel(inputData.HSD_DIP2),
    "previous": allPreviousData._id,
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
  // response.send({"recived":true})
})

module.exports = router