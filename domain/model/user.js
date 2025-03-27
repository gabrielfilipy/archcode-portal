const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize;
const BlogPost = require('./blogPost');

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'tbl_user',
    timestamps: false
  }
);

User.hasMany(BlogPost, { foreignKey: 'user_id' });

module.exports = User;
 