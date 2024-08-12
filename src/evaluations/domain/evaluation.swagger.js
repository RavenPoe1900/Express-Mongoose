/**
 * @swagger
 * tags:
 *   name: Evaluations
 *   description: API for managing evaluations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Evaluation:
 *       type: object
 *       required:
 *         - period
 *         - state
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the evaluation
 *         period:
 *           type: string
 *           description: The period of the evaluation in the format "YYYY-MM"
 *           example: "2024-01"
 *         state:
 *           type: string
 *           description: The state of the evaluation
 *           enum:
 *             - pending
 *             - completed
 *             - cancelled
 *           example: "pending"
 *         type:
 *           type: string
 *           description: The type of the evaluation
 *           enum:
 *             - partial
 *             - final
 *             - test
 *           example: "partial"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the evaluation
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the evaluation
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: The soft delete date of the evaluation
 */

/**
 * @swagger
 * /evaluations:
 *   post:
 *     summary: Create a new evaluation
 *     tags: [Evaluations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evaluation'
 *     responses:
 *       201:
 *         description: The evaluation was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evaluation'
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /evaluations:
 *   get:
 *     summary: Get all evaluations
 *     tags: [Evaluations]
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
 *         description: List of evaluations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Evaluation'
 */

/**
 * @swagger
 * /evaluations/{id}:
 *   get:
 *     summary: Get an evaluation by ID
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The evaluation ID
 *     responses:
 *       200:
 *         description: The evaluation details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evaluation'
 *       404:
 *         description: Evaluation not found
 */

/**
 * @swagger
 * /evaluations/{id}:
 *   put:
 *     summary: Update an evaluation by ID
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The evaluation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evaluation'
 *     responses:
 *       200:
 *         description: The evaluation was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evaluation'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Evaluation not found
 */

/**
 * @swagger
 * /evaluations/{id}/soft-delete:
 *   patch:
 *     summary: Soft delete an evaluation by ID
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The evaluation ID
 *     responses:
 *       200:
 *         description: The evaluation was successfully soft deleted
 *       404:
 *         description: Evaluation not found
 */

/**
 * @swagger
 * /evaluations/{id}:
 *   delete:
 *     summary: Permanently delete an evaluation by ID
 *     tags: [Evaluations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The evaluation ID
 *     responses:
 *       200:
 *         description: The evaluation was successfully deleted
 *       404:
 *         description: Evaluation not found
 */
