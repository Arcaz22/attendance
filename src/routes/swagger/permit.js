/**
 * @swagger
 *
 * /v1/permit/create_permit:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create Approval Permit
 *     tags: [Permit]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              description: user id
 *                              type: string
 *                          permit_type:
 *                              description: user id
 *                              type: string
 *                          start_date:
 *                              description: user id
 *                              type: string
 *                          end_date:
 *                              description: user id
 *                              type: string
 *                          reason:
 *                              description: user id
 *                              type: string
 *                          proof:
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
 * /v1/permit/approval_permit:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Aprroval from admin
 *     tags: [Permit]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              description: user id
 *                              type: string
 *                          permitId:
 *                              description: permit id
 *                              type: string
 *                          statusApproval:
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
 */
