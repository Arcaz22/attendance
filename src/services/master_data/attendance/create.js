const schema = require("../../../schemas/validations/attendance/check_in");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const Attendance = require("../../../schemas/models/Attendance");
const ATTENDANCE_TYPE = require("../../../schemas/enums/attendance_type");

const createAttend = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const attendance = await Attendance.create({
    userId: body.userId,
    check_in: new Date().toISOString(),
    attendance_type: ATTENDANCE_TYPE.HADIR,
  });

  return attendance;
}

module.exports = createAttend;
