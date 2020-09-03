const db = require('../../models')
const { Collaborator, User, Post } = db

const userService = {
  getUsers: async (req, res, callback) => {
    try {
      let users = await User.findAll()
      return callback({
        status: 200,
        message: 'success',
        data: users
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  getUser: async (req, res, callback) => {
    try {
      let user = await User.findOne({
        where: { id: req.params.userId }
      })
      return callback({
        status: 200,
        message: 'success',
        data: user
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  deleteUser: async (req, res, callback) => {
    try {
      let user = await User.findOne({
        where: { id: req.params.userId }
      })

      if (!user) {
        return callback({
          status: 400,
          message: "User not found.",
          data: null
        })
      }

      if (user.id === req.user.id) {
        return callback({
          status: 400,
          message: "You can not delete yourself.",
          data: null
        })
      }

      user.destroy()
      await Collaborator.destroy({
        where: { UserId: req.params.userId }
      })

      return callback({
        status: 200,
        message: 'Delete a user successfully.',
        data: null
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