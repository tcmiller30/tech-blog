const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// C is for Create Routes
router.post('/', async (req, res) => {
    try{
        const commentData = await Comment.create({
        //request body should look like this...
        // {
        //     "content": "Test Content",
        //     "user_id": 1,   //this is the user who is making the comment
        //     "post_id": 1    //this is the post that is being commented on
        // } 
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try{
        const commentData = await Comment.findAll({
            attributes: ['id', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Post,
                    attributes: ['title'],
                },
            ],
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
