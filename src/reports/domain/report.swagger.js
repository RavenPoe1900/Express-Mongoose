/**
 * @swagger
 * paths:
 *   /api/reports/employee/{reportId}/report:
 *     get:
 *       summary: Get evaluation report for an employee
 *       tags: [Reports]
 *       parameters:
 *         - name: reportId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *             format: uuid
 *           description: The ID of the employee's report
 *       responses:
 *         200:
 *           description: Evaluation report retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *                   tests:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         area:
 *                           type: string
 *                   evaluations:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         period:
 *                           type: string
 *                         state:
 *                           type: string
 *                         type:
 *                           type: string
 *                         score:
 *                           type: number
 *                         test:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                             name:
 *                               type: string
 *                             area:
 *                               type: string
 *         404:
 *           description: Report not found
 *         500:
 *           description: Internal server error
 */

/**
 * @swagger
 * paths:
 *   /api/reports/department/{departmentId}/report:
 *     get:
 *       summary: Get department report
 *       tags: [Reports]
 *       parameters:
 *         - name: departmentId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *             format: uuid
 *           description: The ID of the department
 *       responses:
 *         200:
 *           description: Department report retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   areas:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         tests:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                               name:
 *                                 type: string
 *                               area:
 *                                 type: string
 *                         users:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                               name:
 *                                 type: string
 *                               email:
 *                                 type: string
 *                               role:
 *                                 type: string
 *                               evaluations:
 *                                 type: array
 *                                 items:
 *                                   type: object
 *                                   properties:
 *                                     _id:
 *                                       type: string
 *                                     period:
 *                                       type: string
 *                                     state:
 *                                       type: string
 *                                     type:
 *                                       type: string
 *                                     score:
 *                                       type: number
 *                                     test:
 *                                       type: object
 *                                       properties:
 *                                         _id:
 *                                           type: string
 *                                         name:
 *                                           type: string
 *                                         area:
 *                                           type: string
 *         404:
 *           description: Department not found
 *         500:
 *           description: Internal server error
 */
