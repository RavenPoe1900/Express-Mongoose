/**
 * @swagger
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       required:
 *         - name
 *         - area
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: The ID of the test
 *           example: "60d5f7d3d0d6c240b8d7b929"
 *         name:
 *           type: string
 *           description: The name of the test
 *           example: "Math Test"
 *         area:
 *           type: string
 *           format: uuid
 *           description: The ID of the area associated with this test
 *           example: "60d5f7d3d0d6c240b8d7b925"
 *         evaluations:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of evaluation IDs associated with this test
 *           example: ["60d5f7d3d0d6c240b8d7b926"]
 *         questions:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of question IDs associated with this test
 *           example: ["60d5f7d3d0d6c240b8d7b927"]
 *         users:
 *           type: array
 *           items:
 *             type: string
 *             format: uuid
 *           description: List of user IDs associated with this test
 *           example: ["60d5f7d3d0d6c240b8d7b928"]
 *       timestamps:
 *         type: object
 *         properties:
 *           createdAt:
 *             type: string
 *             format: date-time
 *             description: The time when the test was created
 *           updatedAt:
 *             type: string
 *             format: date-time
 *             description: The time when the test was last updated
 */

/**
 * @swagger
 * paths:
 *   /tests:
 *     get:
 *       summary: Get all tests
 *       tags: [Tests]
 *       responses:
 *         200:
 *           description: List of tests
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Test'
 *         500:
 *           description: Server error
 *
 *     post:
 *       summary: Create a new test
 *       tags: [Tests]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       responses:
 *         201:
 *           description: Test created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Test'
 *         400:
 *           description: Bad request
 *         500:
 *           description: Server error
 *
 *   /tests/{id}:
 *     get:
 *       summary: Get a test by ID
 *       tags: [Tests]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             format: uuid
 *           required: true
 *           description: ID of the test to retrieve
 *       responses:
 *         200:
 *           description: A test object
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Test'
 *         404:
 *           description: Test not found
 *         500:
 *           description: Server error
 *
 *     put:
 *       summary: Update a test by ID
 *       tags: [Tests]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             format: uuid
 *           required: true
 *           description: ID of the test to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       responses:
 *         200:
 *           description: Test updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Test'
 *         400:
 *           description: Bad request
 *         404:
 *           description: Test not found
 *         500:
 *           description: Server error
 *
 *     delete:
 *       summary: Delete a test by ID
 *       tags: [Tests]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *             format: uuid
 *           required: true
 *           description: ID of the test to delete
 *       responses:
 *         204:
 *           description: Test deleted successfully
 *         404:
 *           description: Test not found
 *         500:
 *           description: Server error
 */
