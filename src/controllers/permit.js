const BaseResponse = require("../schemas/responses/BaseResponse");
const { StatusCodes } = require("http-status-codes");
const CreatePermit = require("../services/master_data/permit/create");
const UpdatePermit = require("../services/master_data/permit/update");

const CreatePermitController = async (req, res) => {
  try {
    res.status(StatusCodes.CREATED).json(
      new BaseResponse({
        status: StatusCodes.CREATED,
        message: `Berhasil Membuat Izin`,
        data: await CreatePermit(req.body),
      })
    );
  } catch (error) {
    const status = error?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    res
      .status(status)
      .json(new BaseResponse({ status: status, message: error.message }));
  }
};

const UpdatePermitController = async (req, res) => {
  try {
    res.status(StatusCodes.CREATED).json(
      new BaseResponse({
        status: StatusCodes.CREATED,
        message: `Berhasil Memperbaharui Presensi`,
        data: await UpdatePermit(req.body),
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
  CreatePermitController,
  UpdatePermitController
};
