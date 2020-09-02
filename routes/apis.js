const express = require('express')
const router = express.Router()
const postController = require('../controllers/apis/postController')


router.get('/posts', postController.getPosts)
router.get('/post/:postId/view', postController.viewPost)
router.get('/post/:postId', postController.getPost)
router.post('/post', postController.createPost)
router.put('/post/:postId', postController.updatePost)
router.delete('/post/:postId', postController.deletePost)

module.exports = router