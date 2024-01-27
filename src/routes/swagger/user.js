/**
 * @swagger
 *
 * /v1/user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get user data
 *     tags: [User]
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *        description: The page of list
 *        example: 1
 *      - in: query
 *        name: length
 *        schema:
 *          type: integer
 *        required: false
 *        description: The length of list
 *        example: 10
 *      - in: query
 *        name: search
 *        schema:
 *          type: string
 *        required: false
 *        description: search with keyword user name
 *      - in: query
 *        name: role
 *        schema:
 *          type: string
 *        required: false
 *        description: search with user job position
 *     responses:
 *       200:
 *         description: The list of user.
 *         content:
 *           application/json:
 *             schema:
 *              allOf:
 *                  - $ref: '#/components/schemas/DataTable'
 *                  - type: object
 *                    properties:
 *                      data:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/UserFind'
 *
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *              $ref: '#/components/schemas/BaseError'
 *
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: create new user
 *     tags: [User]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              description: username user
 *                              type: string
 *                              example: test
 *                          email:
 *                              description: user email optional
 *                              type: string
 *                              example: test@gmail.com
 *                          password:
 *                              description: user password optional
 *                              type: string
 *                              example: test123
 *                          gender:
 *                              description: user gender
 *                              type: string
 *                              example: wanita
 *                          address:
 *                              description: user address
 *                              type: string
 *                              example: jl. test
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
 *   delete:
 *      security:
 *          - bearerAuth: []
 *      summary: delete user data
 *      tags: [User]
 *      parameters:
 *          - in: query
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: user id
 *            example: 1
 *      responses:
 *          200:
 *              description: Success Message
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf:
 *                              - $ref: '#/components/schemas/BaseResponse'
 *                              - type: object
 *                                properties:
 *                                  message:
 *                                      type: string
 *
 *          500:
 *              description: Some server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BaseError'
 *
 * /v1/user/change_password:
 *   post:
 *      security:
 *       - bearerAuth: []
 *      summary: change password for user
 *      tags: [User]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          old_password:
 *                              description: old user password
 *                              type: string
 *                          new_password:
 *                              description: new user password
 *                              type: string
 *                          confirm_password:
 *                              description: confirm new password
 *                              type: string
 *      responses:
 *          200:
 *              description: login token
 *              content:
 *                  application/json:
 *                      schema:
 *                          allOf:
 *                              - $ref: '#/components/schemas/BaseResponse'
 *
 *          500:
 *              description: Some server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/BaseError'
 *
 * /v1/user/create_employee:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: create new employee
 *     tags: [User]
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          userId:
 *                              description: user id
 *                              type: string
 *                          employee_type:
 *                              description: employee type
 *                              type: string
 *                          departement:
 *                              description: user departement optional
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
