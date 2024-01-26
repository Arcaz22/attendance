/**
 * @swagger
 * /v1/auth:
 *   post:
 *      summary: login for user
 *      tags: [Auth]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              description: username user or user phone number
 *                              type: string
 *                              example: test@gmail.com
 *                          password:
 *                              description: user password
 *                              type: string
 *                              example: test123
 *      responses:
 *          200:
 *              description: login token
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf:
 *                              - $ref: '#/components/schemas/BaseResponse'
 *                              - type: object
 *                                properties:
 *                                  data:
 *                                      type: string
 *
 *          500:
 *              description: Some server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BaseError'
 *
 *
 */
