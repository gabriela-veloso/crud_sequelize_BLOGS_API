const verifyTitle = async (title) => {
    if (!title || title.length === 0) {
        return '"title" is required';
    }
    return null;
};
const verifyCategoryIds = async (categoryIds) => {
    if (!categoryIds || categoryIds.length === 0) {
        return '"categoryIds" is required';
    }
    return null;
};
const verifyContent = async (content) => {
    if (!content || content.length === 0) {
        return '"content" is required';
    }
    return null;
};

module.exports = { verifyTitle, verifyCategoryIds, verifyContent };