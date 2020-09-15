const db = require('../models')
const { Collaborator, Post } = db
const { Op } = require("sequelize")

const postService = {
  getPosts: async (req, res, callback) => {
    try {
      let posts = await Collaborator.findAll({
        where: { UserId: req.user.id },
        include: Post
      })
      return callback({
        status: 200,
        message: "success",
        data: posts

      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  getPost: async (req, res, callback) => {
    try {
      let post = await Collaborator.findOne({
        where: { UserId: req.user.id, PostId: req.params.postId },
        include: Post
      })
      return callback({
        status: 200,
        message: "success",
        data: post
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  viewPost: async (req, res, callback) => {
    try {
      let post = await Post.findOne({ where: { id: req.params.postId } })
      if (post && post.status === "public") {
        return callback({
          status: 200,
          message: "success",
          data: post
        })
      } else if (post && post.status === "private") {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null
        })
      } else {
        return callback({
          status: 404,
          message: "Not found",
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
  createPost: async (req, res, callback) => {
    try {
      let newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status || 'private'
      })

      await Collaborator.create({
        PostId: newPost.id,
        UserId: req.user.id,
        role: 'owner'
      })

      return callback({
        status: 200,
        message: "success",
        data: newPost
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  updatePost: async (req, res, callback) => {
    try {
      // only allow owner and collaborator to edit post
      let record = await Collaborator.findOne({
        where: { UserId: req.user.id, PostId: req.params.postId, role: { [Op.or]: ['owner', 'collaborator'], } },
        include: Post
      })
      if (!record) {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null
        })
      }

      // update post
      let post = await Post.findOne({
        where: { id: record.Post.id }
      })
      post = await post.update({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
      })

      return callback({
        status: 200,
        message: "success",
        data: post
      })
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null
      })
    }
  },
  deletePost: async (req, res, callback) => {
    try {
      // only allow owner to delete the post
      let record = await Collaborator.findOne({
        where: { UserId: req.user.id, PostId: req.params.postId, role: 'owner' },
        include: Post
      })
      if (!record) {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null
        })
      }

      // delete post
      let post = await Post.findOne({
        where: { id: record.Post.id }
      })

      await Collaborator.destroy({
        where: { PostId: record.Post.id }
      })

      await post.destroy()

      return callback({
        status: 200,
        message: "success",
        data: []
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

module.exports = postService