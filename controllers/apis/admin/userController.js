const userService = require('../../../services/admin/userService')

const adminUserController = {
  getUsers: (req, res) => {
    userService.getUsers(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  getUser: (req, res) => {
    userService.getUser(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  deleteUser: (req, res) => {
    userService.deleteUser(req, res, data => {
      return res.status(data.status).json(data)
    })
  },

}

module.exports = adminUserController