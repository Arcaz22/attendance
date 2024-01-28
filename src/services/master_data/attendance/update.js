const schema = require("../../../schemas/validations/attendance/check_in");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const Attendance = require("../../../schemas/models/Attendance");

const updateAttend = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const lastAttendance = await Attendance.findOne({
    where: {
      userId: body.userId
    },
    order: [ ['check_in', 'DESC'] ]
  });

  const [rowsUpdated, [updatedAttend]] = await Attendance.update(
    {
      check_out: new Date(),
    },
    {
      where: {
        userId: body.userId,
        check_in: lastAttendance.check_in
      },
      returning: true,
    }
  );

  if (rowsUpdated === 0) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: "Failed to update attendance",
    });
  }

  return updatedAttend;
}

module.exports = updateAttend;
