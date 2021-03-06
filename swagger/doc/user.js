/********************************************************************
* User - user signin
* POST /api/user/signin
********************************************************************/

/**
 * @swagger
 * /api/user/signin:
 *   post:
 *     tags:
 *      - User
 *     description: Once you signin, you can use token to access other api. Click "Authorize" button on the top, and put in "Bearer YOUR_TOKEN"
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: your email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: password
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: signin fail, please check email and password again
 */

/********************************************************************
* User - user signup
* POST /api/user/signup
********************************************************************/

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     tags:
 *      - User
 *     description: Signup as user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: your name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: your email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: password
 *         in: formData
 *         required: true
 *         type: string
 *       - name: passwordCheck
 *         description: enter password again
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: signup fail
 */

 /********************************************************************
* User - get user info
* GET /api/user
********************************************************************/

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *      - User
 *     description: Get user info
 *     produces:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: signup fail
 */