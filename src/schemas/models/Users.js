const sequelize = require('sequelize');
const db = require('../../config/database');

const Users = db.define('users', {
  id: {
    type: sequelize.STRING,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: sequelize.STRING,
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
  tableName: 'users',
  timestamps: false,
});

Users.beforeCreate((userInstance) => {
  userInstance.created_at = new Date();
  userInstance.updated_at = new Date();
});
Users.beforeUpdate((userInstance) => {
  userInstance.updated_at = new Date();
});

module.exports = Users;
