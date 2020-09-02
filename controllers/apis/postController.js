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
  viewPost: (req, res) => {
    postService.viewPost(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  createPost: (req, res) => {
    postService.createPost(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  updatePost: (req, res) => {
    postService.updatePost(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
  deletePost: (req, res) => {
    postService.deletePost(req, res, data => {
      return res.status(data.status).json(data)
    })
  }
}

module.exports = postController