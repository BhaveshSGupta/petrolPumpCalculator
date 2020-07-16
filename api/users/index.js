// const express = require('express')
// const app = new express.Router()
const app = require("../app")
const User = require('../models/user')
const auth = require('../authentication/index')
const multer = require('multer')
const sharp = require('sharp')
const {
    connect,
    disconnect
} = require('../utils')

// const {
//     sendWelcomeEmail,
//     sendCancelationEmail
// } = require('../emails/account')

app.post('/api/users', async (req, res) => {
    connect()
    const user = new User(req.body)

    try {
        await user.save()
        // sendWelcomeEmail(user.email, user.name)
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

app.post('/api/users/login', async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch {
        res.status(400).send()
    }
})

app.post('/api/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()

    } catch (e) {

        res.status(500).send()

    }
})

app.post('/api/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send()

    } catch (e) {

        res.status(500).send()

    }
})


app.get('/api/users/me', auth, async (req, res) => {
    res.send(req.user)
})

app.patch('/api/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']
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
})

app.delete('/api/users/me', auth, async (req, res) => {

    try {
        // sendCancelationEmail(req.user.email, req.user.name)
        await req.user.remove()

        res.send(req.user)

    } catch (e) {
        res.status(500).send()
    }
})

const avatar = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {

        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please use proper format'))
        }

        cb(undefined, true)
    }
})

app.post('/api/users/me/avatar', auth, avatar.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({
        width: 250,
        height: 250
    }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
})

app.delete('/api/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

app.get('/api/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!User || !user.avatar) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)

    } catch (e) {
        res.status(404).send()
    }
})

module.exports = app