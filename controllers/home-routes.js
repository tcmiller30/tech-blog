const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home');
});
router.get('/login', async (req, res) => {
    res.render('login');
});
router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});
router.get('/project', async (req, res) => {
    res.render('project');
});

module.exports = router;