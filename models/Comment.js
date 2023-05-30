const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    // Comment Id
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // Comment content
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Date of comment
    date_created:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    // User id for data relation
    user_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    // Post id for data relation
    post_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;