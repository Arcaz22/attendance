const sequelize = require('sequelize');
const db = require('../../config/database');
const PERMIT_TYPE = require('../enums/permit_type');
const STATUS_APPROVAL = require('../enums/status_approval');
const ATTENDANCE_TYPE = require('../enums/attendance_type');

const Permit = db.define('permit', {
  id: {
    type: sequelize.STRING,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  permit_type: {
    type: sequelize.ENUM,
    values: Object.values(PERMIT_TYPE),
    allowNull: false,
  },
  start_date: {
    type: sequelize.DATE,
    allowNull: false,
  },
  end_date: {
    type: sequelize.DATE,
    allowNull: false,
  },
  reason: {
    type: sequelize.STRING,
    allowNull: false,
  },
  //ganti menjadi multer
  proof: {
    type: sequelize.STRING,
    allowNull: false,
  },
  status_approval: {
    type: sequelize.ENUM,
    values: Object.values(STATUS_APPROVAL),
    allowNull: true,
  },
  attendance_type: {
    type: sequelize.ENUM,
    values: Object.values(ATTENDANCE_TYPE),
    allowNull: true,
  },
}, {
  tableName: 'permit',
  timestamps: false,
});

module.exports = Permit;
