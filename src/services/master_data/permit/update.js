const schema = require("../../../schemas/validations/permit/updatePermit");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const Permit = require("../../../schemas/models/Permit");
const STATUS_APPROVAL = require("../../../schemas/enums/status_approval");
const ATTENDANCE_TYPE = require("../../../schemas/enums/attendance_type");

const UpdatePermit = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const { permitId, statusApproval } = body;

  if (![STATUS_APPROVAL.DITERIMA, STATUS_APPROVAL.DITOLAK].includes(statusApproval)) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: "Status approval tidak valid",
    });
  }

  const permit = await Permit.findOne({
    where: {
      id: permitId,
      userId: body.userId,
    },
  });

  if (!permit) {
    throw new BaseError({
      status: StatusCodes.NOT_FOUND,
      message: "Permit tidak ditemukan",
    });
  }

  await permit.update({ status_approval: statusApproval });

  if (statusApproval === STATUS_APPROVAL.DITERIMA) {
    await permit.update({ attendance_type: ATTENDANCE_TYPE.IZIN });
  }

  return permit;
};

module.exports = UpdatePermit;
