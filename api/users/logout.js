const app = require('../app')
const { disconnect } = require('../utils')
const auth = require('../authentication')

app.post('/api/users/logout', auth, async (req, res) => {
    process.env.NODE_ENV === "development" && console.log('logout')
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.clearCookie("accessToken")
        res.status(200).send({ "logout": "succesful" })
    } catch (e) {
        res.status(500).send(e)

    }
    disconnect('logout')
})
module.exports = app