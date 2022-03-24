const verifyName = async (name) => {
    if (!name || name.length === 0) {
        return '"displayName" is required';
    }
    return null;
};

module.exports = { verifyName };