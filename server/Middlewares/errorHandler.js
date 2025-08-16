
const errorHandler = (err, req, res, next) => {
  console.error(`[Error Handler] ${err.message || err}`);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};

module.exports = errorHandler;
