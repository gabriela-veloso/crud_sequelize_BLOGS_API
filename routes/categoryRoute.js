const express = require('express');
const auth = require('../middlewares/auth.middleware');

const route = express.Router();
const categoryController = require('../controllers/categoryController');

route.get(
    '/', auth,
    categoryController.listAllCategories,
);

route.post(
    '/', auth,
    categoryController.create,
);

module.exports = route;
