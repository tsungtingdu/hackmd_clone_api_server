const db = require('../../models')
const { Collaborator, User, Post } = db
const { Op } = require("sequelize")

const collaboratorService = {
  getCollaborators: async (req, res, callback) => {
    try {
      let collaborators = await Collaborator.findAll()
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
  }
}

module.exports = collaboratorService