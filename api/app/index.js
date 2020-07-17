const express = require("express")
const app = express()
const session = require('express-session')
const passport = require('passport')
app.use(express.json())
app.use(session({
    secret:'thesecret',
    saveUninitialized:false,
    resave:false
}))
module.exports = app;