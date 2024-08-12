/**
 * @swagger
 * tags:
 *   name: Responses
 *   description: Operations related to responses
 */

/** 
 * @swagger
 * components:
 *   schemas:
 *     Response:
 *       type: object
 *       required:
 *         - content
 *         - isCorrect
 *         - question
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the response
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *         content:
 *           type: string
 *           description: The content of the response
 *           example: The correct answer is Paris.
 *         isCorrect:
 *           type: boolean
 *           description: Indicates if the response is correct
 *           example: true
 *         question:
 *           type: string
 *           description: The ID of the related question
 *           example: 64b5f7c2d3e4b4c4f1d0e4f2
 *         score:
 *           type: number
 *           minimum: 1
 *           maximum: 10
 *           description: The score for the response, if applicable
 *           example: 8
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the response
 *           example: "2024-08-11T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the response
 *           example: "2024-08-11T14:48:00.000Z"
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           description: The soft delete date of the response, if applicable
 *           example: "2024-08-11T14:48:00.000Z"
 */

/**
 * @swagger
 * /responses:
 *   post:
 *     summary: Create a new response
 *     tags: [Responses]
 *     requestBody:
 *       description: Response object that needs to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: The correct answer is Paris.
 *               isCorrect:
 *                 type: boolean
 *                 example: true
 *               question:
 *                 type: string
 *                 example: 64b5f7c2d3e4b4c4f1d0e4f2
 *               score:
 *                 type: number
 *                 example: 8
 *     responses:
 *       201:
 *         description: Response created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /responses:
 *   get:
 *     summary: Retrieve all responses
 *     tags: [Responses]
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
 *         description: Number of responses per page
 *     responses:
 *       200:
 *         description: A list of responses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Response'
 *       401:
 *         description: Unauthorized, invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /responses/{id}:
 *   get:
 *     summary: Retrieve a response by ID
 *     tags: [Responses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the response to retrieve
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     responses:
 *       200:
 *         description: Response retrieved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Response not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /responses/{id}:
 *   put:
 *     summary: Update a response by ID
 *     tags: [Responses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the response to update
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     requestBody:
 *       description: Response object that needs to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Response'
 *     responses:
 *       200:
 *         description: Response updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400:
 *         description: Bad request, invalid input
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Response not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /responses/{id}:
 *   delete:
 *     summary: Delete a response by ID
 *     tags: [Responses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the response to delete
 *         schema:
 *           type: string
 *           example: 64b5f7c2d3e4b4c4f1d0e4f1
 *     responses:
 *       204:
 *         description: Response deleted
 *       400:
 *         description: Bad request, invalid ID format
 *       401:
 *         description: Unauthorized, invalid credentials
 *       404:
 *         description: Response not found
 *       500:
 *         description: Internal server error
 */
