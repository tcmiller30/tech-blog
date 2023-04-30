const router = require('express').Router();
const { User } = require('../../models');

// Signup Route
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
            
            res.status(200).json(userData);
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});
// Login Route
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({where : {name: req.body.name}});
        if(!userData){
            res.status(400).json({message: 'Incorrect name or password, please try again'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: 'Incorrect name or password, please try again'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            // req.session.name = userData.name;
            req.session.loggedIn = true;
            res.json({user: userData, message: 'You are now logged in!'});
        });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

// Logout Route
router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
    
// Find all users
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
        });
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Check if user is logged in
router.get('/status', (req, res) => {
    if(req.session.loggedIn){
        res.json({loggedIn: true});
    } else {
        res.json({loggedIn: false});
    }
});

module.exports = router;