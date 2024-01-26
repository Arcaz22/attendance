const { Op } = require("sequelize");
const DELETE_STATUS = require("../../schemas/enums/deleted_status");
const User = require("../../schemas/models/Users");
const BaseError = require("../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");

const isValidUserLogin = async (email) => {
  const userData = await User.findOne({
    where: {
      [Op.or]: [{ email }],
      deleted: DELETE_STATUS.INACTIVE,
    },
    attributes: {
      exclude: [`created_at`, `updated_at`, `deleted`],
    },
  });
  if (!userData) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: `User tidak ditemukan`,
    });
  }

  return userData.dataValues;
};

const isValidUser = async (id, tx = null) => {
  const isUserExists = await User.findOne({
    where: { id, deleted: DELETE_STATUS.INACTIVE },
    transaction: tx,
  });
  if (!isUserExists) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: `User tidak ditemukan`,
    });
  }
  return isUserExists.dataValues;
};

module.exports = {
  isValidUserLogin,
  isValidUser,
};
