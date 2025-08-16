const rateLimit = require('express-rate-limit');

const bookmarkRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 60, 
  message: {
    error: 'Rate limit exceeded: Only 60 requests allowed per hour per IP.'
  },
  standardHeaders: true, 
  legacyHeaders: false,  
});

module.exports = bookmarkRateLimiter;
