const { Sequelize } = require('sequelize');
const { config } = require('dotenv');

config();

const attendance = new Sequelize({
  host: process.env.DB_HOST,
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

// attendance.sync().then(() => {
//   console.log('Model-model telah berhasil disinkronkan dengan basis data.');
// }).catch((error) => {
//   console.error('Gagal menyelesaikan sinkronisasi:', error);
// });

module.exports = attendance;
