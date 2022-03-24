const errorMiddleware = require('./error.middlewares');
const auth = require('./auth.middleware');

module.exports = {
  errorMiddleware, auth,
};
