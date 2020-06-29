const mongoose = require('mongoose')
const express = require('express')
const dailyRouter = require('./routes/daily')
const { request } = require('express')

const port = process.env.PORT

const app = express()
app.use(dailyRouter)
app.use(express.json())



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
