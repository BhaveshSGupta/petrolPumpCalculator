const mongoose = require('mongoose')
require('./db/mongoose')
const express = require('express')
const dailyRouter = require('./routes/daily')
const { request } = require('express')

const port = process.env.PORT

const app = express()
app.get('/', (req, res) => {
    res.send('Api Chal rahi hai')
})
app.use(express.json())

app.use(dailyRouter)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
