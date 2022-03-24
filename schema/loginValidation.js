const verifyEmailLogin = (email) => {
    if (email === undefined) {
        return '"email" is required';
    }
    if (!email || email.length === 0) {
        return '"email" is not allowed to be empty';
    }
   
    return null;
};

const passwordValidationLogin = (password) => {
    if (password === undefined) {
        return '"password" is required';
    }
    if (!password || !password.length) {
        return '"password" is not allowed to be empty';
    }
    return null;
};

module.exports = { verifyEmailLogin, passwordValidationLogin };