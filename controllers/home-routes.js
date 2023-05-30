const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

// Get all projects from database and render
router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // Serialize postData for template
        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', async (req, res) => {
    console.log(req.session.logged_in);
    if(req.session.logged_in){
        res.redirect('/dashboard');
        return;
    }
        res.render('login');
});
// 
router.get('/dashboard', withAuth, async (req, res) => {
    try{
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'title', 'content', 'date_created'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // Serialize postData for template 
        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Get one project from database and render
router.get('/posts/:id', async (req, res) => {
    try{
        console.log(req.session.user_id)
        const postData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'content', 'date_created', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['date_created', 'content', 'user_id'],
                },
            ],
            
        });
        // Serialize postData for template
        const post = postData.get({ plain: true});
console.log(post);
        res.render('postPage', {
            post,
            logged_in: req.session.logged_in,
            postOwner: req.session.user_id === post.user_id,
            // commentOwner: req.session.user_id === Comment.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;