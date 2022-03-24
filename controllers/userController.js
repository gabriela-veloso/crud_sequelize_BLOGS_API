const { createAnUser, loginUser, listUser, userById } = require('../services/userServices');

const listUsers = async (_req, res) => {
    const usersList = await listUser();
    return res.status(usersList.code).json(usersList.data);
};

const createUser = async (req, res, next) => {
    try {
        const createdUser = await createAnUser(req.body);
        return res.status(createdUser.code).json(createdUser.data);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
    const { email, password } = req.body;
    const verifyLogin = await loginUser(email, password);
    return res.status(verifyLogin.code).json(verifyLogin.data);
} catch (error) {
    next(error);
}
};

const listUserById = async (req, res, next) => {
    try {
    const { id } = req.params;
    const user = await userById(id);
    return res.status(user.code).json(user.data);
    } catch (e) {
        next(e);
    }
};

module.exports = { listUsers, createUser, login, listUserById };