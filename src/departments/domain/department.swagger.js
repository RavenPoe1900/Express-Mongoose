/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Operations related to departments
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the department
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *         name:
 *           type: string
 *           description: The name of the department
 *           example: HR
 *         description:
 *           type: string
 *           description: A brief description of the department
 *           example: Human Resources department
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the department
 *           example: "2024-08-11T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the department
 *           example: "2024-08-11T14:48:00.000Z"
 */

/**
 * @swagger
 * /departments:
 *   post:
 *     summary: Create a new department
 *     tags: [Departments]
 *     requestBody:
 *       description: Department object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       201:
 *         description: Department created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departments:
 *   get:
 *     summary: Retrieve all departments
 *     tags: [Departments]
 *     responses:
 *       200:
 *         description: A list of departments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Department'
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departments/{id}:
 *   get:
 *     summary: Retrieve a department by ID
 *     tags: [Departments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the department to retrieve
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       200:
 *         description: Department retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       400:
 *         description: Bad request, invalid ID format
 *       404:
 *         description: Department not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departments/{id}:
 *   put:
 *     summary: Update a department by ID
 *     tags: [Departments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the department to update
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     requestBody:
 *       description: Department object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Department'
 *     responses:
 *       200:
 *         description: Department updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Department'
 *       400:
 *         description: Bad request, invalid input
 *       404:
 *         description: Department not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /departments/{id}:
 *   delete:
 *     summary: Delete a department by ID
 *     tags: [Departments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the department to delete
 *         schema:
 *           type: string
 *           example: 60d5f7c2d3e4b4c4f1d0e4e0
 *     responses:
 *       204:
 *         description: Department deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       404:
 *         description: Department not found
 *       500:
 *         description: Internal server error
 */
