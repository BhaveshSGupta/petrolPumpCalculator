const express = require('express')
const router = new express.Router()
const volumneStaticData = require('../excelConverter/index')
const Dailydata = require('../models/dailyData')

const calVolofPetrol = (number) => {
  const intNumber = parseInt(number)
  if(intNumber < number){
    return (number - intNumber) * volumneStaticData.MS[intNumber].DIFFERENCE + volumneStaticData.MS[intNumber].VOLUME
  } 
  return volumneStaticData.MS[intNumber].VOLUME
}

const calVolofDiesel = (number) => {
  const intNumber = parseInt(number)
  if(intNumber < number){
    return (number - intNumber) * volumneStaticData.HSD[intNumber].DIFFERENCE + volumneStaticData.HSD[intNumber].VOLUME
  } 
  return volumneStaticData.HSD[intNumber].VOLUME
}

router.post('/daily', async (request, response)=>{
  const inputData = {...request.body}
  // console.log(inputData)
  const volumeofPetrolTank = calVolofPetrol(inputData.MS_DIP)
  // console.log(volumeofPetrolTank)
  const allData = await Dailydata.findOne({}).sort('-createdAt')
  console.log({allData})
    const dailydata = new Dailydata({
      ...request.body,
      "Volume_in_MS":calVolofPetrol(inputData.MS_DIP),
      "Volume_in_HSD_DIP1":calVolofDiesel(inputData.HSD_DIP1),
      "Volume_in_HSD_DIP2":calVolofDiesel(inputData.HSD_DIP2)
    })
    try {
        await dailydata.save()
        response.status(201).send(dailydata)
      } catch (e) {
        response.status(400).send(e)
      }
  // response.send({"recived":true})
})

module.exports = router