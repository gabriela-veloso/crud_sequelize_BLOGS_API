const EIGHT = 8;
const SIX = 6;
const displayNameVAlidation = (displayName) => {
    if (!displayName || displayName.length === 0) {
        return '"displayName" is required';
    }
    if (displayName.length < EIGHT) {
        return '"displayName" length must be at least 8 characters long';
    }
    return null;
};

const verifyEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!email || email.length === 0) {
        return '"email" is required';
    }
    if (!regexEmail.test(email)) {
        return '"email" must be a valid email';
    }
    return null;
};

const passwordValidation = (password) => {
    if (!password || password.length === 0) {
        return '"password" is required';
    }
    if (password.length < SIX) {
        return '"password" length must be 6 characters long';
    }
    return null;
};

module.exports = { displayNameVAlidation, verifyEmail, passwordValidation };