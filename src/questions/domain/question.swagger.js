/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Operations related to questions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       required:
 *         - content
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the question
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *         content:
 *           type: string
 *           description: The content or text of the question
 *           example: What is the capital of France?
 *         type:
 *           type: string
 *           description: The type of the question
 *           enum:
 *             - multiple-choice
 *             - true-false
 *             - short-answer
 *           example: multiple-choice
 *         options:
 *           type: array
 *           description: The options for multiple-choice questions
 *           items:
 *             type: string
 *             example: Paris
 *         correctAnswer:
 *           type: string
 *           description: The correct answer for the question
 *           example: Paris
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the question
 *           example: "2024-08-11T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the question
 *           example: "2024-08-11T14:48:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: The soft delete date of the question, if applicable
 *           example: "2024-08-11T14:48:00.000Z"
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       description: Question object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: What is the capital of France?
 *               type:
 *                 type: string
 *                 example: multiple-choice
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Paris
 *                   - London
 *                   - Rome
 *               correctAnswer:
 *                 type: string
 *                 example: Paris
 *     responses:
 *       201:
 *         description: Question created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /questions:
 *   get:
 *     summary: Retrieve all questions
 *     tags: [Questions]
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
 *         description: A list of questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Question'
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Retrieve a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the question to retrieve
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     responses:
 *       200:
 *         description: Question retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the question to update
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     requestBody:
 *       description: Question object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Question'
 *     responses:
 *       200:
 *         description: Question updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the question to delete
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     responses:
 *       204:
 *         description: Question deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */
