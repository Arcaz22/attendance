const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const User = require('../../../schemas/models/Users');
const constant = require('../../../utils/constant');
const schema = require('../../../schemas/validations/user/FilterForm');
const BaseError = require('../../../schemas/responses/BaseError');
const DELETE_STATUS = require('../../../schemas/enums/deleted_status');
const Employee = require('../../../schemas/models/Employee');
const Attendance = require('../../../schemas/models/Attendance');

const FindUsers = async (body) => {
  const validatedBody = schema.validate(body);
  if (validatedBody.error) {
    throw new BaseError({
      status: StatusCodes.BAD_REQUEST,
      message: validatedBody.error.message,
    });
  }
  const {
    page = 1,
    length = constant.PAGE_SIZE,
  } = validatedBody.value;

  const { count: total, rows: data } = await User.findAndCountAll({
    where: generateWhereClause(validatedBody.value),
    offset: page * constant.PAGE_SIZE - 10,
    limit: length,
    attributes: {
      exclude: ['created_at', 'updated_at', 'deleted', 'password'],
    },
    include: [{
      model: Employee,
      as: 'employee',
      attributes: {
        exclude: ['created_at', 'updated_at', 'deleted', 'userId'],
      },
      model: Attendance,
      as: 'attendance',
      attributes: {
        exclude: ['id', 'userId'],
      },
    }],
  });
  return {
    data,
    total,
  };
};

const generateWhereClause = (body) => {
  const { role, search } = body;
  const whereClause = {
    name: {
      [Op.iLike]: `%${search || ''}%`,
    },
    deleted: DELETE_STATUS.INACTIVE,
  };
  if (role) whereClause.role = role;

  return whereClause;
};

module.exports = FindUsers;
