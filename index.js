const mongoose = require('mongoose')
const express = require('express')
const port = 3245
const app = express()
app.use(express.json())


app.get('/',(request, response)=>{
    response.send('<h1>Hello World</h1>')
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
// app.use(cors())
// app.use(express.json())