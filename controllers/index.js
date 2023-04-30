const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');
// const loginRoutes = require('./login-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;