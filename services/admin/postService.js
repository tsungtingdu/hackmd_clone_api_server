const db = require('../../models')
const { Post } = db

const postService = {
  getPosts: async (req, res, callback) => {
    try {
      let posts = await Post.findAll()
      return callback({
        status: 200,
        message: 'success',
        datat: posts
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
      let post = await Post.findOne({
        where: { id: req.params.postId }
      })
      return callback({
        status: 200,
        message: 'success',
        datat: post
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
      let post = await Post.findOne({
        where: { id: req.params.postId }
      })
      await post.destroy()
      return callback({
        status: 200,
        message: 'delete a post successfully',
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

module.exports = postService