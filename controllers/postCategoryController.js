const { listCategories, createCategory } = require('../services/postCategoryServices');

const listAllPostsCategories = async (_req, res, next) => {
    try {
    const categoriesList = await listCategories();
    return res.status(categoriesList.code).json(categoriesList.data);
    } catch (e) {
        next(e); 
    }
};

const createPostscategories = async (req, res, next) => {
    try {
        const { name } = req.body;
        const createNewCategory = await createCategory(name);
        return res.status(createNewCategory.code).json(createNewCategory.data);
    } catch (e) {
        next(e);
    }
};

module.exports = { createPostscategories, listAllPostsCategories };