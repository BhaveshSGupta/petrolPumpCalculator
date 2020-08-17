const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { connect, disconnect } = require('../utils')
const regex = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$')
const auth = async (req, res, next) => {
    connect('auth')
    try {
        let token = ""
        req.headers.cookie.split(';').forEach((value, index) => {
            const cookieStr = value
            const match = regex.exec(cookieStr)
            if (match !== null && match[1] == "accessToken") {
                token = match[2]
            }
        })
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            console.log("eror")
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.clearCookie("accessToken");
        res.status(401).send({ "error": 'Please authenticate.' })
        disconnect('auth')
    }

}

module.exports = auth