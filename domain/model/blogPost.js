const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../core/database/connection').sequelize; // Certifique-se de importar sequelize corretamente

class BlogPost extends Model { }

BlogPost.init(
    {
        postId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            field: 'blog_post_id'
        },
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'blog_title'
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: 'user_id'
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'date'
        }
    },
    {
        sequelize,
        modelName: 'BlogPost',
        tableName: 'tbl_blog_post',
        timestamps: false 
    }
);

module.exports = BlogPost;
