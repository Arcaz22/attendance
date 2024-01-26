const BaseResponse = require("../schemas/responses/BaseResponse");
const DataTable = require("../schemas/responses/DataTable");
const { StatusCodes } = require("http-status-codes");
const UserLogin = require("../services/auth/user")
const CreateUser = require("../services/master_data/users/create");
const DeleteUser = require("../services/master_data/users/delete");
const FindUsers = require("../services/master_data/users/find");
const ChangePassword = require("../services/master_data/users/change_password");

const FindUserController = async (req, res) => {
  try {
    const users = await FindUsers(req.query);
    res.status(StatusCodes.OK).json(new DataTable(users.data, users.total));
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const LoginUserController = async (req, res) => {
  try {
    const userToken = await UserLogin(req.body);
    res.status(StatusCodes.OK).json(
      new BaseResponse({
        status: StatusCodes.OK,
        message: `Berhasil Login`,
        data: userToken,
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const CreateUserController = async (req, res) => {
  try {
    res.status(StatusCodes.CREATED).json(
      new BaseResponse({
        status: StatusCodes.CREATED,
        message: `Berhasil Membuat User`,
        data: await CreateUser(req.body),
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const DeleteUserController = async (req, res) => {
  try {
    await DeleteUser(req.query);
    res.status(StatusCodes.OK).json(
      new BaseResponse({
        status: StatusCodes.OK,
        message: `Berhasil menghapus data user`,
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const ChangePasswordController = async (req, res) => {
  try {
    await ChangePassword(req.body, res.locals.user);
    res.status(StatusCodes.OK).json(
      new BaseResponse({
        status: StatusCodes.OK,
        message: `Berhasil memperbarui password user`,
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

module.exports = {
  LoginUserController,
  CreateUserController,
  DeleteUserController,
  FindUserController,
  ChangePasswordController,
};
