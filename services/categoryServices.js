const { Category } = require('../models');
const { verifyName } = require('../schema/categoryValidation');

const listCategories = async () => {
    const allCategories = await Category.findAll();
    return { code: 200, data: allCategories };
};

const createCategory = async (name) => {
    const noName = await verifyName(name);
    if (noName) {
        return { code: 400, data: { message: '"name" is required' } };
    }
    const alreadyExists = await Category.findOne({ where: { name } });
    if (alreadyExists) return { code: 409, data: { message: 'Category already registered' } };
    
    const newCategory = await Category.create({ name });
    console.log(newCategory);
    const { dataValues } = newCategory;
    return { code: 201, data: dataValues };
};

module.exports = { listCategories, createCategory };