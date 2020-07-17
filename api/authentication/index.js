const jwt = require('jsonwebtoken')
const User = require('../models/user')
const passport = require('passport')

const auth = async (req, res, next) => {
    try {
        passport.use(new LocalStrategy(
            function(username, password, done) {
              User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
              });
            }
          ));
          
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
        res.status(401).send({ error: 'Please authenticate.' })
    }
}


module.exports = auth