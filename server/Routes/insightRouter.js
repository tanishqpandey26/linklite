const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../Middlewares/Auth');
const { getAccountInsights } = require('../Controllers/insightController');


router.get('/', ensureAuthenticated, getAccountInsights);

module.exports = router;
