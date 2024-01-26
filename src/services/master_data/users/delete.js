const schema = require("../../../schemas/validations/SingleId");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const db = require("../../../config/database");
const { isValidUser } = require("../../../utils/master_data/user");
const Users = require("../../../schemas/models/Users");
const DELETE_STATUS = require("../../../schemas/enums/deleted_status");

const DeleteUser = async (body) => {
  const validatedBody = schema.validate(body);
  if (validatedBody.error)
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validatedBody.error.message,
    });
  const { id } = validatedBody.value;
  const transaction = await db.transaction();

  try{
    await isValidUser(id , transaction);

    await Users.update({ deleted: DELETE_STATUS.ACTIVE } , {
        where: { id },
        transaction: transaction
    });

    await transaction.commit();
  }catch(error){
    await transaction.rollback();
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    throw new BaseError({
      status: status,
      message: error.message || "Failed delete user",
    });
  }
};

module.exports = DeleteUser;
