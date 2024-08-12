/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

/** @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the user
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *         name:
 *           type: string
 *           description: The name of the user
 *           example: John Doe
 *         email:
 *           type: string
 *           description: The email address of the user
 *           example: john.doe@example.com
 *         password:
 *           type: string
 *           description: The password of the user
 *           example: password123
 *         role:
 *           type: string
 *           description: The role of the user
 *           enum:
 *             - admin
 *             - user
 *           example: user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the user
 *           example: "2024-08-08T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the user
 *           example: "2024-08-08T14:48:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: The soft delete date of the user, if applicable
 *           example: "2024-08-08T14:48:00.000Z"
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: User object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 role:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of questions per page
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 60d5f7c2d3e4b4c4f1d0e4e0
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   email:
 *                     type: string
 *                     example: john.doe@example.com
 *                   role:
 *                     type: string
 *                     example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: User retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 role:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to update
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     requestBody:
 *       description: User object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: jane.doe@example.com
 *               password:
 *                 type: string
 *                 example: newpassword123
 *               role:
 *                 type: string
 *                 example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *                 name:
 *                   type: string
 *                   example: Jane Doe
 *                 email:
 *                   type: string
 *                   example: jane.doe@example.com
 *                 role:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       204:
 *         description: User deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
