const express = require('express')
const router = new express.Router()

const Dailydata = require('../models/dailyData')

router.post('/daily', async (request, response)=>{
    const dailydata = new Dailydata({...request.body}) 
    try {
        await dailydata.save()
        response.status(201).send(task)
      } catch (e) {
        response.status(400).send(e)
      }
  // response.send({"recived":true})
})

module.exports = router