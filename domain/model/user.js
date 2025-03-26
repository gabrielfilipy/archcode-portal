const { DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize;

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id'
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_name'
  },
  userLogin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'user_login' 
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'user_password'
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'user_email'
  }
}, {
  tableName: 'tbl_user',
  timestamps: false
});

User.hasMany(require('./blogPost'), { foreignKey: 'user_id' });

module.exports = User;
