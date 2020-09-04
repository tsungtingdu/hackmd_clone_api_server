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
* Admin- get collaborators data
* GET /api/admin/collaborators
********************************************************************/

/**
 * @swagger
 * /api/admin/collaborators:
 *   get:
 *     tags:
 *      - Admin
 *     description: get collaborators data
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
* Admin - update a collaborator record
* PUT /api/admin/collaborator/:id
********************************************************************/

/**
 * @swagger
 * /api/admin/collaborator/{id}:
 *   put:
 *     tags:
 *      - Admin
 *     description: update a new collaborator to a post
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: id
 *       - name: postId
 *         description: postId
 *         in: formData
 *         type: string
 *       - name: userId
 *         description: userId
 *         in: formData
 *         type: string
 *       - name: role
 *         description: role
 *         in: formData
 *         enum: ["owner", "viewer", "collaborator"]
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

/********************************************************************
* Admin - remove a collaborator record
* DELETE /api/admin/collaborator/:id
********************************************************************/

/**
 * @swagger
 * /api/admin/collaborator/{id}:
 *   delete:
 *     tags:
 *      - Admin
 *     description: delete a collaborator record
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: id
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