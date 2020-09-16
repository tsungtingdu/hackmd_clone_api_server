const userService = require('../../services/userService')

const userController = {
  signup: (req, res) => {
    userService.signup(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  signin: (req, res) => {
    userService.signin(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  getUser: (req, res) => {
    userService.getUser(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  logout: (req, res) => {
    userService.signout(req, res, data => {
      return res.status(data.status).json(data)
    })
  }
}

module.exports = userController