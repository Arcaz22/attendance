const sequelize = require('sequelize');
const db = require('../../config/database');
const ATTENDANCE_TYPE = require("../enums/attendance_type");

const Attendance = db.define('attendance', {
  id: {
    type: sequelize.STRING,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  check_in: {
    type: sequelize.DATE,
    allowNull: false,
  },
  check_out: {
    type: sequelize.DATE,
    allowNull: true,
  },
  attendance_type: {
    type: sequelize.ENUM,
    values: Object.values(ATTENDANCE_TYPE),
    allowNull: false,
  },
}, {
  tableName: 'attendance',
  timestamps: false,
});

module.exports = Attendance;
