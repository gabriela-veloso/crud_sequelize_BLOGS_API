const express = require('express');

const route = express.Router();
const auth = require('../middlewares/auth.middleware');
const userController = require('../controllers/userController');

route.get(
    '/', auth,
    userController.listUsers,
);

route.get(
    '/:id', auth,
    userController.listUserById,
);

route.post('/', userController.createUser);

module.exports = route;
