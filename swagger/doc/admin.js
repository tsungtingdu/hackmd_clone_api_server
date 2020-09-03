/********************************************************************
* Admin - get all posts
* GET /api/admin/posts
********************************************************************/

/**
 * @swagger
 * /api/admin/posts:
 *   get:
 *     tags:
 *      - Admin
 *     description: get all posts
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Admin - get a post
* GET /api/admin/post/:postId
********************************************************************/

/**
 * @swagger
 * /api/admin/post/{postId}:
 *   get:
 *     tags:
 *      - Admin
 *     description: view a post
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Post - delete a post
* DELETE /api/admin/post/:postId
********************************************************************/

/**
 * @swagger
 * /api/admin/post/{postId}:
 *   delete:
 *     tags:
 *      - Admin
 *     description: delete a post
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Admin - get all users
* GET /api/admin/users
********************************************************************/

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     tags:
 *      - Admin
 *     description: get all users
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Admin - get a user
* GET /api/admin/user/:userId
********************************************************************/

/**
 * @swagger
 * /api/admin/user/{userId}:
 *   get:
 *     tags:
 *      - Admin
 *     description: view a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         type: integer
 *         required: true
 *         description: userId
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Post - delete a user
* DELETE /api/admin/user/:userId
********************************************************************/

/**
 * @swagger
 * /api/admin/user/{userId}:
 *   delete:
 *     tags:
 *      - Admin
 *     description: delete a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         type: integer
 *         required: true
 *         description: userId
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */

/********************************************************************
* Admin- get collaboration data of a post or user
* POST /api/admin/collaborators
********************************************************************/

/**
 * @swagger
 * /api/admin/collaborators:
 *   post:
 *     tags:
 *      - Admin
 *     description: get collaboration data of a post or user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId
 *         in: formData
 *         type: string
 *       - name: postId
 *         description: postId
 *         in: formData
 *         type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 */