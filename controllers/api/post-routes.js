const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
// const withAuth = require('../../utils/auth');

// C is for Create Routes

// R is for Read Routes
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            attributes: ['title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const postData = await Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ['title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// U is for Update Routes

// D is for Delete Routes

module.exports = router;