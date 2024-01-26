const schema = require("../../../schemas/validations/user/ChangePassword");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const { isValidUser } = require("../../../utils/master_data/user");
const db = require("../../../config/database");
const { comparePassword, encryptPassword } = require("../../../utils/hash");
const Users = require("../../../schemas/models/Users");

const ChangePassword = async (body , user) => {
    const validatedBody = schema.validate(body);
    if (validatedBody.error)
      throw new BaseError({
        status: StatusCodes.BAD_REQUEST,
        message: validatedBody.error.message,
      });
    
    const transaction = await db.transaction();
    try{    
        const { old_password , new_password , confirm_password } = validatedBody.value;
        validateNewPassword(new_password, confirm_password);

        const userData = await isValidUser(user.id , transaction);
        await validateOldPassword(old_password , userData.password);

        await Users.update({
            password: await encryptPassword(new_password),
            is_new: false
        } , { where: { id: userData.id }, transaction: transaction });

        await transaction.commit();
    }catch(error){
        await transaction.rollback();
        const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
        throw new BaseError({
            status: status,
            message: error.message || "Failed create farm",
        });
    }
}

const validateOldPassword = async (oldPasswordPlainText, oldPasswordHashed) => {
    const isValidPassword = await comparePassword(oldPasswordPlainText, oldPasswordHashed);
    if(!isValidPassword){
        throw new BaseError({
            status: StatusCodes.BAD_REQUEST,
            message: `Password lama tidak valid`
        })
    }
}

const validateNewPassword = (newPassword, confirmPassword) => {
    if(newPassword !== confirmPassword){
        throw new BaseError({
            status: StatusCodes.BAD_REQUEST,
            message: `Password baru tidak sama`
        });
    }
}

module.exports = ChangePassword;
