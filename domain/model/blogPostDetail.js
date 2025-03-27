const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize;
const BlogPost = require('./blogPost');

class BlogPostDetail extends Model {}

BlogPostDetail.init(
    {
      blogPostDetailId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        field: 'blog_post_detail_id'
      },
      postContent: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'post_content'
      },
      blogPostId: {
        type: DataTypes.UUID,
        references: {
          model: BlogPost,
          key: 'blog_post_id'
        },
        field: 'blog_post_id'
      },
      postFoto: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'post_foto'
      }
    },
    {
      sequelize,
      modelName: 'BlogPostDetail',
      tableName: 'tbl_blog_post_detail',
      timestamps: false
    }
  );
  
  BlogPostDetail.belongsTo(BlogPost, { foreignKey: 'blogPostId', as: 'blogPost' });

module.exports = BlogPostDetail;
