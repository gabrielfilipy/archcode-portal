const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize; // Certifique-se de importar sequelize corretamente
const BlogPost = require('./blogPost'); // Importando BlogPost

class BlogPostDetail extends Model {}

BlogPostDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    blogPostId: {
      type: DataTypes.INTEGER,
      references: {
        model: BlogPost, // BlogPost precisa ser uma classe que estende Model
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'BlogPostDetail'
  }
);

// Definir relacionamento
BlogPostDetail.belongsTo(BlogPost, { foreignKey: 'blogPostId', as: 'blogPost' });

module.exports = BlogPostDetail;
