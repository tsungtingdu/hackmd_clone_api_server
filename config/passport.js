const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db
const passport = require('passport')
const passportJWT = require('passport-jwt')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// use JWT strategy
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

let strategy = new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  let user = await User.findOne({ where: { id: jwtPayload.id } })
  if (!user) return done(null, false)
  return done(null, user)
})

passport.use(strategy)

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findOne({
      where: { id: id }
    })
    if (!user) return done(null, false)
    return done(null, user)
  } catch (err) {
    done(err, null)
  }
})


module.exports = passport