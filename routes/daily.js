const express = require('express')
const router = new express.Router()
const volumneStaticData = require('../excelConverter/index')

const Dailydata = require('../models/dailyData')

router.post('/daily', async (request, response)=>{
  // console.log(volumneStaticData)
  const inputData = {...request.body}
    const dailydata = new Dailydata() 
    try {
        await dailydata.save()
        response.status(201).send(task)
      } catch (e) {
        response.status(400).send(e)
      }
  // response.send({"recived":true})
})

module.exports = router