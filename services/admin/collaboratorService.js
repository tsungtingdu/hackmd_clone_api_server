const db = require('../../models')
const { Collaborator, User, Post } = db
const { Op } = require("sequelize")

const collaboratorService = {
  getData: async (req, res, callback) => {
    try {
      const { userId, postId } = req.body
      let posts = await Collaborator.findAll({
        where: {
          [Op.or]: [{ UserId: userId ? userId : null, }, { PostId: postId ? postId : null }]
        },
        include: [User, Post]
      })
      return callback({
        status: 200,
        message: 'success',
        data: posts
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