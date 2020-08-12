const jwt = require('jsonwebtoken')
const { User } = require('../models')
const {
  connect,
  disconnect
} = require('../utils')

const auth = async (req, res, next) => {
  connect('auth')
  try {
    const token = req.header('Authorization').replace('Bearer', '').trim()
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }).lean()
    if (!user) {
      throw new Error()
    }
    req.token = token
    req.user = user
    next()
  } catch (e) {
    res.clearCookie("accessToken");
    res.status(401).send({ error: 'Please authenticate.' })
    disconnect('auth')
  }

}


module.exports = auth