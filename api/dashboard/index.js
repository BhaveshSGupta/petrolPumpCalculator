const dailyData = require('../models/daily')
const app = require('../app')
const auth = require('../authentication')
const { connect, disconnect } = require('../utils')

app.get('/api/dashboard', auth, async (req, res) => {
    const sort = {}
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        const data = await dailyData.find(
            {}, null, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
        )
        disconnect('dashboard')
        res.status(200).send(data)

    } catch (e) {
        disconnect('dashboard')
        res.status(500).send()
    }
})

module.exports = app
