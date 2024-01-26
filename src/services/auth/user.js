const { StatusCodes } = require('http-status-codes');
const schema = require('../../schemas/validations/auth/login');
const { comparePassword } = require('../../utils/hash');
const BaseError = require('../../schemas/responses/BaseError');
const { getToken } = require('../../utils/jwt');
const { isValidUserLogin } = require('../../utils/master_data/user');

const UserLogin = async (body) => {
  const validatedBody = schema.validate(body);
  if (validatedBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validatedBody.error.message,
    });
  }

  const { email, password } = validatedBody.value;
  const userData = await isValidUserLogin(email);

  const isPasswordMatch = await comparePassword(password, userData.password);
  if (!isPasswordMatch) {
    throw new BaseError({
      status: StatusCodes.UNAUTHORIZED,
      message: 'Password tidak sesuai',
    });
  }

  delete userData.password;
  return {
    ...userData,
    token: getToken(userData),
  };
};

module.exports = UserLogin;
