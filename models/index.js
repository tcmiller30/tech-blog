// Tracks relationships between models
const User = require('./User');
const Post = require('./Post');

// create associations
Post.belongsTo(User, {
    foreignKey: 'user_id'
    });

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post };