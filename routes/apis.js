const express = require('express')
const router = express.Router()
const postController = require('../controllers/apis/postController')


router.get('/posts', postController.getPosts)
router.get('/posts/:postId', postController.getPost)
router.post('/posts', postController.createPost)

module.exports = router