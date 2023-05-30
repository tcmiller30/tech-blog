const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        // Post Id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Title of post
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Date of post
        date_created:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        // Content of post
        content:{
            type: DataTypes.STRING,
        },
        // User id for data relation
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
