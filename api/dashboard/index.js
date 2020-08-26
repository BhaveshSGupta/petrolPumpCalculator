const dailyData = require('../models/daily')
const app = require('../app')
const auth = require('../authentication')
const { connect, disconnect } = require('../utils')

app.get('/api/dashboard', auth, async (req, res) => {
    try {
        const data = await dailyData.find(
            { previous: { $ne: null } }, null, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip)
        }
        ).sort({ Date: 'desc' })
        disconnect('dashboard')
        res.status(200).send(data)

    } catch (e) {
        disconnect('dashboard')
        res.status(500).send()
    }
})

module.exports = app
