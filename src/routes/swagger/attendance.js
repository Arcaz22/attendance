/**
 * @swagger
 *
 * /v1/attendance/check_in:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create an attendance record (Check-In)
 *     tags: [Attendance]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              description: user id
 *                              type: string
 *     responses:
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *              allOf:
 *                  - $ref: '#/components/schemas/BaseResponse'
 *
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/BaseError'
 * 
 * /v1/attendance/check_out:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create an attendance record (Check-In)
 *     tags: [Attendance]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              description: user id
 *                              type: string
 *     responses:
 *       200:
 *         description: Success message.
 *         content:
 *           application/json:
 *             schema:
 *              allOf:
 *                  - $ref: '#/components/schemas/BaseResponse'
 *
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/BaseError'
 *
 * 
 */
