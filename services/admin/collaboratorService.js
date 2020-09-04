const db = require('../../models')
const { Collaborator, User, Post } = db
const { Op } = require("sequelize")

const collaboratorService = {
  getCollaborators: async (req, res, callback) => {
    try {
      let collaborators = await Collaborator.findAll({
        order: [
          ['postId', 'ASC'],
          ['userId', 'ASC'],
        ],
      })
      return callback({
        status: 200,
        message: 'success',
        data: collaborators
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  putCollaborator: async (req, res, callback) => {
    try {
      const { postId, userId, role } = req.body
      console.log(postId, userId, role)
      let collaborator = await Collaborator.findOne({
        where: { id: req.params.id }
      })
      collaborator = await collaborator.update({
        PostId: postId,
        UserId: userId,
        role: role
      })
      return callback({
        status: 200,
        message: 'success',
        data: collaborator
      })
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
      let collaborator = await Collaborator.findOne({
        where: { id: req.params.id }
      })
      collaborator.destroy()
      return callback({
        status: 200,
        message: 'Delete a record successfully.',
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