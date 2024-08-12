/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Operations related to roles
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the role
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *         name:
 *           type: string
 *           description: The name of the role
 *           enum:
 *             - Admin
 *             - Manager
 *             - Employee
 *           example: Admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the role
 *           example: "2024-08-08T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the role
 *           example: "2024-08-08T14:48:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: The soft delete date of the role, if applicable
 *           example: "2024-08-08T14:48:00.000Z"
 */

/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       description: Role object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: [Admin, Manager, Employee]
 *                 example: Admin
 *     responses:
 *       201:
 *         description: Role created
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
 *                   enum: [Admin, Manager, Employee]
 *                   example: Admin
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Retrieve all roles
 *     tags: [Roles]
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
 *         description: A list of roles
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
 *                     enum: [Admin, Manager, Employee]
 *                     example: Admin
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Retrieve a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the role to retrieve
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: Role retrieved
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
 *                   enum: [Admin, Manager, Employee]
 *                   example: Admin
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Role not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     summary: Update a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the role to update
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     requestBody:
 *       description: Role object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 enum: [Admin, Manager, Employee]
 *                 example: Manager
 *     responses:
 *       200:
 *         description: Role updated
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
 *                   enum: [Admin, Manager, Employee]
 *                   example: Manager
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Role not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     summary: Delete a role by ID
 *     tags: [Roles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the role to delete
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       204:
 *         description: Role deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Role not found
 *       500:
 *         description: Internal server error
 */
