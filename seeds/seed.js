// Import sequelize connection/models
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// Import seed data
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Bulk create users
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Bulk create posts
    const posts = await Post.bulkCreate(postData.map(post => ({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    })), {
        returning: true,
    });
    
    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: posts[Math.floor(Math.random() * posts.length)].id,
        });
    }
    // Bulk create comments
    
    process.exit(0);
};

seedDatabase();

