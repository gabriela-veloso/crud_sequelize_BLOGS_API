const express = require('express');
const auth = require('../middlewares/auth.middleware');

const route = express.Router();
const blogPostsController = require('../controllers/blogPostsController');

route.get(
    '/', auth,
    blogPostsController.listAllPosts,
);

route.get(
    '/:id', auth,
    blogPostsController.listAllPostsById,
);

route.post(
    '/', auth,
    blogPostsController.create,
);

module.exports = route;
