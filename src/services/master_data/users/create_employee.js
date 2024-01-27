const Employee = require("../../../schemas/models/Employee");
const schema = require("../../../schemas/validations/user/CreateEmployee");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");

const CreateEmployee = async(body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      statusCode: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const employee = await Employee.create({
    userId: body.userId,
    employee_type: body.employee_type,
    departement: body.departement,
  });

  return employee;
}

module.exports = CreateEmployee;
