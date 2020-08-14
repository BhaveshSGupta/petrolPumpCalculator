const dailyData = require('../models/daily')
const app = require('../app')
const auth = require('../authentication')
const { connect, disconnect } = require('../utils')

app.get('*', auth, async (req, res) => {
    connect('dashboard')
    const sort = {}
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        const data = await dailyData.find(
            {}, null, {
            limit: 1,
            skip: parseInt(req.query.skip),
            sort
        }
        ).select('date')
        disconnect('dashboard')
        res.status(200).send(data)

    } catch (e) {
        disconnect('dashboard')
        res.status(500).send()
    }
})

module.exports = app
