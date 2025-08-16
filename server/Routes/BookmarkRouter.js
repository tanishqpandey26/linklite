const express = require('express');
const router = express.Router();
const {
  createBookmark,
  getBookmarks,
  deleteBookmark
} = require('../Controllers/BookmarkController');
const ensureAuthenticated = require('../Middlewares/Auth'); 
const validateBookmark = require('../Middlewares/BookmarkValidation');
const bookmarkRateLimiter = require('../Middlewares/rateLimiter');

router.use(ensureAuthenticated);

router.post('/', bookmarkRateLimiter, validateBookmark, createBookmark);
router.get('/', getBookmarks);
router.delete('/:id', deleteBookmark);

module.exports = router;
