const db = require('../models')
const { Post } = db

const postService = {
  getPosts: async (req, res, callback) => {
    try {
      let posts = await Post.findAll()
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
      let post = await Post.findOne(
        { where: { id: req.params.postId } })
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
        status: 'private'
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
      let post = await Post.findOne({
        where: { id: req.params.postId }
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
      let post = await Post.findOne({ where: { id: req.params.postId } })

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