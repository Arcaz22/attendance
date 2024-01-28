const BaseResponse = require("../schemas/responses/BaseResponse");
const DataTable = require("../schemas/responses/DataTable");
const { StatusCodes } = require("http-status-codes");
const CreateAttendance = require("../services/master_data/attendance/create");
const UpdateAttend = require("../services/master_data/attendance/update");

const CreateAttendanceController = async (req, res) => {
  try {
    res.status(StatusCodes.CREATED).json(
      new BaseResponse({
        status: StatusCodes.CREATED,
        message: `Berhasil Membuat Presensi`,
        data: await CreateAttendance(req.body),
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const UpdateAttendController = async (req, res) => {
  try {
    res.status(StatusCodes.CREATED).json(
      new BaseResponse({
        status: StatusCodes.CREATED,
        message: `Berhasil Memperbaharui Presensi`,
        data: await UpdateAttend(req.body),
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
  CreateAttendanceController,
  UpdateAttendController
};
