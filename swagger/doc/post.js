/********************************************************************
* Post - get all posts
* GET /api/posts
********************************************************************/

/**
 * @swagger
 * /api/posts:
 *   get:
 *     tags:
 *      - Post
 *     description: get all posts that user participated in (as owner, viewer, or collaborator)
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
* Post - visitor can view a public post
* GET /api/post/:postId/view
********************************************************************/

/**
 * @swagger
 * /api/post/{postId}/view:
 *   get:
 *     tags:
 *      - Post
 *     description: visitor can view a public post
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 *       401:
 *         description: unauthorized
 *       404:
 *         description: not found
 */

/********************************************************************
* Post -get a post
* GET /api/post/:postId
********************************************************************/

/**
 * @swagger
 * /api/post/{postId}:
 *   get:
 *     tags:
 *      - Post
 *     description: get a post if user is owner, viewer, or collaborator
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
* Post - create a new post
* POST /api/post
********************************************************************/

/**
 * @swagger
 * /api/post:
 *   post:
 *     tags:
 *      - Post
 *     description: create a new post, and the user will be the owner of this post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: content
 *         description: content
 *         in: formData
 *         required: true
 *         type: string
 *       - name: status
 *         description: status, default value is private
 *         in: formData
 *         enum: ["private", "public"]
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
* Post - update a post
* PUT /api/post/:postId
********************************************************************/

/**
 * @swagger
 * /api/post/{postId}:
 *   put:
 *     tags:
 *      - Post
 *     description: user (owner or collaborator of the post) can update a post
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *       - name: title
 *         description: title
 *         in: formData
 *         type: string
 *       - name: content
 *         description: content
 *         in: formData
 *         type: string
 *       - name: status
 *         description: status
 *         in: formData
 *         enum: ["private", "public"]
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
* Post - delete a post
* DELETE /api/post/:postId
********************************************************************/

/**
 * @swagger
 * /api/post/{postId}:
 *   delete:
 *     tags:
 *      - Post
 *     description: delete a post, only owner of the post can delete it.
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