const postService = require('../../services/postService')


const postController = {
  getPosts: (req, res) => {
    postService.getPosts(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  getPost: (req, res) => {
    postService.getPost(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  createPost: (req, res) => {
    postService.createPost(req, res, data => {
      return res.status(data.status).json(data)
    })
  }
}

module.exports = postController