/**
 * @swagger
 * tags:
 *   name: Areas
 *   description: Operations related to areas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Area:
 *       type: object
 *       required:
 *         - name
 *         - department
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the area
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *         name:
 *           type: string
 *           description: The name of the area
 *           example: Marketing
 *         department:
 *           type: string
 *           description: The ID of the department the area belongs to
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the area
 *           example: "2024-08-08T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the area
 *           example: "2024-08-08T14:48:00.000Z"
 */

/**
 * @swagger
 * /areas:
 *   post:
 *     summary: Create a new area
 *     tags: [Areas]
 *     requestBody:
 *       description: Area object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Marketing
 *               department:
 *                 type: string
 *                 example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       201:
 *         description: Area created
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
 *                   example: Marketing
 *                 department:
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
 * /areas:
 *   get:
 *     summary: Retrieve all areas
 *     tags: [Areas]
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
 *         description: Number of areas per page
 *     responses:
 *       200:
 *         description: A list of areas
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
 *                     example: Marketing
 *                   department:
 *                     type: string
 *                     example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /areas/{id}:
 *   get:
 *     summary: Retrieve an area by ID
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the area to retrieve
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: Area retrieved
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
 *                   example: Marketing
 *                 department:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Area not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /areas/{id}:
 *   put:
 *     summary: Update an area by ID
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the area to update
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     requestBody:
 *       description: Area object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sales
 *               department:
 *                 type: string
 *                 example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: Area updated
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
 *                   example: Sales
 *                 department:
 *                   type: string
 *                   example: 60d5f7c2d3e4b4c4f1d0e4e0
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Area not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /areas/{id}:
 *   delete:
 *     summary: Delete an area by ID
 *     tags: [Areas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the area to delete
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       204:
 *         description: Area deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Area not found
 *       500:
 *         description: Internal server error
 */
