const express = require('express')
const app = express()
const router = express.Router()
const postController = require('../controllers/apis/postController')
const userController = require('../controllers/apis/userController')
const collaboratorController = require('../controllers/apis/collaboratorController')

// auth
const passport = require('../config/passport')
const authenticated = passport.authenticate('jwt', { session: false })

router.get('/posts', authenticated, postController.getPosts)
router.get('/post/:postId/view', postController.viewPost)
router.get('/post/:postId', authenticated, postController.getPost)
router.post('/post', authenticated, postController.createPost)
router.put('/post/:postId', authenticated, postController.updatePost)
router.delete('/post/:postId', authenticated, postController.deletePost)

router.post('/user/signup', userController.signup)
router.post('/user/signin', userController.signin)

router.get('/collaborators/:postId', authenticated, collaboratorController.getCollaborators)
router.post('/collaborator/:postId', authenticated, collaboratorController.addCollaborator)
router.delete('/collaborator/:postId', authenticated, collaboratorController.deleteCollaborator)

module.exports = router