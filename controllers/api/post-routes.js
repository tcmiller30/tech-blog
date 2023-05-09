const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// C is for Create Routes
router.post('/', async (req, res) => {
    try{
        const postData = await Post.create({
        //request body should look like this...
        // {
        //     "title": "Test Title",
        //     "content": "Test Content",
        //     "user_id": 1
        // } 
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(postData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// R is for Read Routes
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'date_created'],
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
                {
                    model: Comment,
                    attributes: ['content', 'date_created', 'user_id'],
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
router.put('/:id', async (req, res) => {
    try{
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// D is for Delete Routes
router.delete('/:id', async (req, res) => {
    try{
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;