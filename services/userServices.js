const { 
    displayNameVAlidation, verifyEmail, passwordValidation } = require('../schema/userValidation');
const JWTgenerator = require('./JWTgenerator');
const { verifyEmailLogin, passwordValidationLogin } = require('../schema/loginValidation');
const { User } = require('../models');

const createAnUser = async (body) => {
    const { displayName, email, password } = body;
    const errorName = displayNameVAlidation(displayName);
    const errorEmail = verifyEmail(email);
    const errorPassword = passwordValidation(password);
    if (errorName) {
        return { code: 400, data: { message: errorName } };
    } if (errorEmail) {
        return { code: 400, data: { message: errorEmail } };
    } if (errorPassword) {
        return { code: 400, data: { message: errorPassword } };
    }
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
        return { code: 409, data: { message: 'User already registered' } };
    }
    await User.create({ ...body });
    const token = JWTgenerator(displayName, email, password);
return { code: 201, data: { token } };
};

const loginUser = async (email, password) => {
    const errorEmailLogin = verifyEmailLogin(email);
    const errorPasswordLogin = passwordValidationLogin(password);
    
    if (errorEmailLogin) {
        return { code: 400, data: { message: errorEmailLogin } };
    } 
    if (errorPasswordLogin) {
        return { code: 400, data: { message: errorPasswordLogin } };
    } 
    const alreadyUser = await User.findOne({ where: { email } });
    if (!alreadyUser) {
        return { code: 400, data: { message: 'Invalid fields' } };
    }
    const token = JWTgenerator({ id: alreadyUser.id, email });
    return { code: 200, data: { token } };
};

const listUser = async () => {
    // gaspar - monitoria esquenta para o projeto - ensina como excluir 1 chave
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return { code: 200, data: allUsers };
};

const userById = async (id) => {
    const userId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    if (!userId) {
    return { code: 404, data: { message: 'User does not exist' } };
    }
    return { code: 200, data: userId };
};

module.exports = { createAnUser, loginUser, listUser, userById };