const mongoose = require('mongoose')
const express = require('express')
const { request } = require('express')
const port = 3245
const app = express()
app.use(express.json())
const Dailydata = require('./models/dailyData.js')

// app.get('/',(request, response)=>{
//     response.send('<h1>Hello World</h1>')
// })
app.post('/',async (request, response)=>{
    const data = new Dailydata({})
    // console.log(...request.body)
    const body = {...request.body}
    console.log(body)
   await response.send({"recived":true})
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
// app.use(cors())
// app.use(express.json())