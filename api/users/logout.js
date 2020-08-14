const User = require('../models/user')
const app = require('../app')
const { connect, disconnect } = require('../utils')
const auth = require('../authentication')

app.post('*', auth, async (req, res) => {
    connect('logout')
    process.env.NODE_ENV === "development" && console.log('logout')
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.clearCookie("accessToken")
        res.status(200).send()
    } catch (e) {
        res.status(500).send(e)

    }
    disconnect('logout')
})
module.exports = app