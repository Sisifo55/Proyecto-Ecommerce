const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('goshop', 'root', 'vadim20***14', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;