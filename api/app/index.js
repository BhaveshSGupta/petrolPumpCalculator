const express = require("express")
const app = express()
// app.use(express.json())
const expressJsonVerifier = function (request, response, next) {
    express.json()(request, response, error => {
        if (error) {
            console.error(error);
            console.log('Request recived with improper data')
            return response.status(400).send({
                'request': 'failed'
            })
        }
        next();
    })
}
app.use(expressJsonVerifier)
module.exports = app
