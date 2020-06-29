const mongoose = require('mongoose')
const express = require('express')
const { request } = require('express')
const port = 3245
const app = express()
app.use(express.json())
const Dailydata = require('./models/dailyData.js')

app.post('/daily',async (request, response)=>{

    const dailydata = new Dailydata({...request.body}) 
    try {
        await dailydata.save()
        res.status(201).send(task)
      } catch (e) {
        res.status(400).send(e)
      }
   
   await response.send({"recived":true})
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
