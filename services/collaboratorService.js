const db = require('../models')
const { Collaborator, Post, User } = db

const collaboratorService = {

  getCollaborators: async (req, res, callback) => {
    try {

      // only allow owner, viewer, collaborator to see the info
      let collaborator = await Collaborator.findOne({
        where: { PostId: req.params.postId, UserId: req.user.id }
      })

      if (!collaborator) {
        return callback({
          status: 401,
          message: 'Unauthorized',
          data: null
        })
      }

      // retrieve data
      let collaborators = await Collaborator.findAll({
        where: { PostId: req.params.postId }
      })

      return callback({
        status: 200,
        message: 'success',
        data: collaborators
      })
    } catch (err) {
      console.log(err)
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },

  addCollaborator: async (req, res, callback) => {
    try {
      const { email, role } = req.body

      // missing field
      if (!email || !role) {
        return callback({
          status: 400,
          message: 'All fields are required.',
          data: null
        })
      }

      // user does not exist
      let user = await User.findOne({ where: { email: email } })
      if (!user) {
        return callback({
          status: 400,
          message: 'Please enter valid user.',
          data: null
        })
      }

      // add a new collaborator
      let newCollaborator = await Collaborator.create({
        PostId: req.params.postId,
        UserId: user.id,
        role: role
      })
      if (newCollaborator) {
        return callback({
          status: 200,
          message: 'Add new collaborator successfully!',
          data: newCollaborator
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

  deleteCollaborator: async (req, res, callback) => {
    try {
      const { email } = req.body

      // user does not exist
      let user = await User.findOne({ where: { email: email } })
      if (!user) {
        return callback({
          status: 400,
          message: 'Please enter valid user.',
          data: null
        })
      }

      // delete a collaborator
      let record = await Collaborator.findOne({
        where: {
          PostId: req.params.postId,
          UserId: user.id,
        }
      })

      if (record.UserId === req.user.id) {
        return callback({
          status: 400,
          message: 'You can not remove yourself',
          data: null
        })
      }

      await record.destroy()
      return callback({
        status: 200,
        message: 'Delete a collaborator successfully!',
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

module.exports = collaboratorService