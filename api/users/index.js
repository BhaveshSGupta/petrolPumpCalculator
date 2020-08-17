const User = require('../models/user')
const app = require('../app')
const { connect, disconnect } = require('../utils')

app.post('/api/users', async (req, res) => {
    connect()
    process.env.NODE_ENV === "development" && console.log("signup")
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user,
            token
        })
    } catch (e) {
        res.status(400).send(e)
    }
    disconnect()
})

module.exports = app