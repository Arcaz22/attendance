const sequelize = require('sequelize');
const db = require('../../config/database');
const Users = require('./Users');
const EMPLOYEE_TYPE = require("../enums/employee");
const DEPARTEMENT = require("../enums/departement");

const Employee = db.define('employee', {
  id: {
    type: sequelize.STRING,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  employee_type: {
    type: sequelize.ENUM,
    values: Object.values(EMPLOYEE_TYPE),
    allowNull: false,
  },
  departement: {
    type: sequelize.ENUM,
    values: Object.values(DEPARTEMENT),
    allowNull: false,
  },
  created_at: {
    type: sequelize.DATE,
  },
  updated_at: {
    type: sequelize.DATE,
  },
  deleted: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'employee',
  timestamps: false,
});

Employee.beforeCreate((employeeInstance) => {
  employeeInstance.created_at = new Date();
  employeeInstance.updated_at = new Date();
});
Employee.beforeUpdate((employeeInstance) => {
  employeeInstance.updated_at = new Date();
});

module.exports = Employee;
