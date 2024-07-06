const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
    defaultValue: 'admin'
  }
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password_hash) {
        console.log('Before create hook - password_hash:', user.password_hash);
        const salt = await bcrypt.genSalt(10);
        user.password_hash = await bcrypt.hash(user.password_hash, salt);
        console.log('After hashing - password_hash:', user.password_hash);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password_hash') && user.password_hash) {
        console.log('Before update hook - password_hash:', user.password_hash);
        const salt = await bcrypt.genSalt(10);
        user.password_hash = await bcrypt.hash(user.password_hash, salt);
        console.log('After hashing - password_hash:', user.password_hash);
      }
    }
  }
});

module.exports = User;