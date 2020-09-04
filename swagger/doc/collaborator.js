/********************************************************************
* Collaborator - get all collaborators of a post
* GET /api/collaborators/:postId
********************************************************************/

/**
 * @swagger
 * /api/collaborators/{postId}:
 *   get:
 *     tags:
 *      - Collaborator
 *     description: get all collaborators of a post, only a owner, viewer, collaborators of a post can retrieve data
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
* Collaborator - add a new collaborator to a post
* POST /api/collaborator/:postId
********************************************************************/

/**
 * @swagger
 * /api/collaborator/{postId}:
 *   post:
 *     tags:
 *      - Collaborator
 *     description: add a new collaborator to a post, only a owner can remove
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *       - name: email
 *         description: email
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
* Collaborator - remove a collaborator from a post
* DELETE /api/collaborator/:postId
********************************************************************/

/**
 * @swagger
 * /api/collaborator/{postId}:
 *   delete:
 *     tags:
 *      - Collaborator
 *     description: remove a collaborator from a post, only a owner can remove
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: postId
 *         type: integer
 *         required: true
 *         description: postId
 *       - name: email
 *         description: email
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
