const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db
const jwt = require('jsonwebtoken')
const passport = require('passport')

const userService = {
  signup: async (req, res, callback) => {
    try {
      const { name, email, password, passwordCheck } = req.body
      // missing fields
      if (!name || !email || !password || !passwordCheck) {
        return callback({
          status: 400,
          message: 'All fields are required',
          data: null
        })
      }
      // handle inconsistent passwords
      if (password !== passwordCheck) {
        return callback({
          status: 400,
          message: 'Passwords inconsistent, please try again',
          data: null
        })
      }

      // handle existing user
      let user = await User.findOne({ where: { email: email } })
      if (user) {
        return callback({
          status: 400,
          message: 'This email has been registered, please try another one.',
          data: null
        })
      }

      // create new user
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      let newUser = await User.create({
        name,
        email,
        password: hash,
        role: "user"
      })
      if (newUser) {
        return callback({
          status: 200,
          message: 'Sign up successfully!',
          data: null
        })
      } else {
        return callback({
          status: 400,
          message: 'Something wrong, please try again',
          data: null
        })
      }
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  signin: async (req, res, callback) => {
    try {
      const { email, password } = req.body

      // missing email or password
      if (!email || !password) {
        return callback({
          status: 400,
          message: "Email and password are required",
          data: null
        })
      }

      let user = await User.findOne({ where: { email: email } })

      // user not found
      if (!user) {
        return callback({
          status: 400,
          message: 'User not found',
          data: null
        })
      }

      // password incorrect
      if (!bcrypt.compareSync(password, user.password)) {
        return callback({
          status: 400,
          message: 'Wrong password',
          data: null
        })
      }

      let payload = { id: user.id }
      let token = jwt.sign(payload, process.env.JWT_SECRET)

      return callback({
        status: 200,
        message: "Sign in successfully!",
        data: {
          token: token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        }
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  }
}

module.exports = userService