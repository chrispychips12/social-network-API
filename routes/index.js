const router = require('express').Router();
const apiRoutes = require('./api');

// Use the API routes
router.use('/api', apiRoutes);

// Fallback for any other routes
router.use((req, res) => res.send('Wrong route!'));

// Export the router
module.exports = router;
