const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        // Id for data relation
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // Title of post
        title:{
            type: DataTypes.STRING,
            allownull: false,
        },
        // Author of post
        author:{
            type: DataTypes.STRING,
            allownull: false,
        },
        // Date of post
        date_created:{
            type: DataTypes.DATE,
            allownull: false,
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
