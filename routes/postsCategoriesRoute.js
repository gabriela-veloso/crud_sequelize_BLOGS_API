const express = require('express');
const auth = require('../middlewares/auth.middleware');

const route = express.Router();
const postCategoryController = require('../controllers/categoryController');

route.get(
    '/', auth,
    postCategoryController.listAllPostsCategories,
);

route.post(
    '/', auth,
    postCategoryController.createPostscategories,
);

module.exports = route;
