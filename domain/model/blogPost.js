const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize; // Certifique-se de importar sequelize corretamente

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'BlogPost',
    tableName: 'blog_posts' // Adicione o nome real da tabela no banco
  }
);

module.exports = BlogPost;
