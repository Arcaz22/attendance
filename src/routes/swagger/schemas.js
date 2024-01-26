/**
 * @swagger
 * components:
 *   schemas:
 *      BaseError:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *              message:
 *                  type: string
 *
 *      DataTable:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *              data:
 *                  type: object
 *              total:
 *                  type: integer
 *                  format: int32
 *
 *      BaseResponse:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *              message:
 *                  type: string
 *
 *      UserFind:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *              name:
 *                  type: string
 *              email:
 *                  type: string
 *              role:
 *                  type: string
 *              gender:
 *                  type: string
 *              address:
 *                  type: string
 *
 */
