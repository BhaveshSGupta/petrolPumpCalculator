const app = require('../app')
const { disconnect } = require('../utils')
const auth = require('../authentication')

app.post('/api/users/logoutall', auth, async (req, res) => {
     console.log('logout')
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
    disconnect('logoutall')
})
module.exports = app