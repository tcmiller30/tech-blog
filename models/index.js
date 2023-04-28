// Tracks relationships between models
const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.hasOne(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };