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
      let posts = await Post.findAll(
        { where: { id: req.params.postId } })
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
  }
}

module.exports = postService