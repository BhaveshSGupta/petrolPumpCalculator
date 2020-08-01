const Models = { dailyData } = require("../models")
const app = require("../app")
const mongoose = require("mongoose")

app.get('*', async (req, res) => {
    console.log("here")
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    const sort = {}
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        const data = await Models.dailyData.find(
            {}, null, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
        ).select('date')
        mongoose.disconnect()
        res.status(200).send(data)

    } catch (e) {
        mongoose.disconnect()
        res.status(500).send()
    }
})

module.exports = app
