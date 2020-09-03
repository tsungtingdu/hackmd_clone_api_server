const postService = require('../../../services/admin/postService')

const adminPostController = {
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
  deletePost: (req, res) => {
    postService.deletePost(req, res, data => {
      return res.status(data.status).json(data)
    })
  },
}

module.exports = adminPostController