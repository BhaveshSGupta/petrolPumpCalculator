const User = require('../models/user')
const app = require('../app')
const { connect, disconnect } = require('../utils')

app.patch('/api/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password', 'firstname', 'lastname']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid Updates!'
        })
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)
    }

    disconnect()
})

app.get('/api/users/me', auth, async (req, res) => {
    res.send(req.user)
    disconnect()
})

module.exports = app