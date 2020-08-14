const User = require('../models/user')
const app = require('../app')
const { connect, disconnect } = require('../utils')

app.post('*', async (req, res) => {
    connect('login')
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie("accessToken", token, {
            expires: new Date(
                Number(new Date()) +
                24 * 60 * 60 * 1000
            ),
            httpOnly: false,
        })
        res.send({
            user,
            token
        })
    } catch {
        res.status(400).send()
    }

    disconnect()
})

module.exports = app