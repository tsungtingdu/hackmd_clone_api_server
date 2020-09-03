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
 *     description: view public post
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