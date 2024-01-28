const schema = require("../../../schemas/validations/permit/createPermit");
const BaseError = require("../../../schemas/responses/BaseError");
const { StatusCodes } = require("http-status-codes");
const Permit = require("../../../schemas/models/Permit");
const STATUS_APPROVAL = require("../../../schemas/enums/status_approval");

const CreatePermit = async (body) => {
  const validateBody = schema.validate(body);
  if (validateBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validateBody.error.message,
    });
  }

  const permit = await Permit.create({
    userId: body.userId,
    permit_type: body.permit_type,
    start_date: body.start_date,
    end_date: body.end_date,
    reason: body.reason,
    proof: body.proof,
    status_approval: STATUS_APPROVAL.PENDING,
    attendance_type: body.attendance_type,
  })

  return permit;
}

module.exports = CreatePermit;
