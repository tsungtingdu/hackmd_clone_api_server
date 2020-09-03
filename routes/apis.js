const express = require('express')
const app = express()
const router = express.Router()
const postController = require('../controllers/apis/postController')
const userController = require('../controllers/apis/userController')
const collaboratorController = require('../controllers/apis/collaboratorController')
const adminPostController = require('../controllers/apis/admin/postController')
const adminUserController = require('../controllers/apis/admin/userController')
const adminCollaboratorController = require('../controllers/apis/admin/collaboratorController')

// auth
const passport = require('../config/passport')
const authenticated = passport.authenticate('jwt', { session: false })

const adminAuthenticated = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorizsed'
    })
  }
}

// admin
router.get('/admin/posts', authenticated, adminAuthenticated, adminPostController.getPosts)
router.get('/admin/post/:postId', authenticated, adminAuthenticated, adminPostController.getPost)
router.delete('/admin/post/:postId', authenticated, adminAuthenticated, adminPostController.deletePost)

router.get('/admin/users', authenticated, adminAuthenticated, adminUserController.getUsers)
router.get('/admin/user/:userId', authenticated, adminAuthenticated, adminUserController.getUser)
router.delete('/admin/user/:userId', authenticated, adminAuthenticated, adminUserController.deleteUser)

router.post('/admin/collaborators', authenticated, adminAuthenticated, adminCollaboratorController.getData)


// user
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