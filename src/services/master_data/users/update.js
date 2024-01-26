const schema = require("../../../schemas/validations/user/UpdateForm");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const db = require("../../../config/database");
const { isValidUser } = require("../../../utils/master_data/user");
const Users = require("../../../schemas/models/Users");
const DELETE_STATUS = require("../../../schemas/enums/deleted_status");

const UpdateUser = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const { name, role, gender, address } = validateBody.value;

  const existingUser = await Users.findByPk(userId);
  if (!existingUser) {
    throw new BaseError({
      status: StatusCodes.NOT_FOUND,
      message: "User not found",
    });
  }

  if (email !== existingUser.email) {
    const emailExists = await Users.findOne({ where: { email } });
    if (emailExists) {
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: "Email already exists",
      });
    }
  }

  const updatedUser = await existingUser.update({
    name,
    email,
    gender,
    role,
    address,
  });

  return updatedUser;
};

module.exports = UpdateUser;
