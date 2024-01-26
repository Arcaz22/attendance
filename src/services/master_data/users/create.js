const schema = require("../../../schemas/validations/user/CreateForm");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const db = require("../../../config/database");
const Users = require("../../../schemas/models/Users");
const { encryptPassword } = require("../../../utils/hash");
const { getRandomString } = require("../../../utils/random");

const CreateUser = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const { name, email, password, gender, address} = validateBody.value;

  const exitingUser = await Users.findOne({ where: { email } });
  if(exitingUser) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: "Email already exists",
    });
  }

  const hashedPassword = await encryptPassword(password);
  
  const user = await Users.create({
    name,
    email,
    role: 'karyawan',
    gender,
    address,
    password: hashedPassword
  })

  return user;
}

module.exports = CreateUser;
