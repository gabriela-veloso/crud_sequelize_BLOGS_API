const { User, Category, BlogPost } = require('../models');
const { verifyTitle, verifyCategoryIds, verifyContent } = require('../schema/blogPostsValidation');

const listBlogPosts = async () => {
    const allPosts = await BlogPost.findAll({
        include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: {
            attributes: [],
          },
        },
      ],
      });
    return { code: 200, data: allPosts };
};

const listBlogPostsById = async (id) => {
  const postId = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
    },
  ],
  });
    if (!postId) { return { code: 404, data: { message: 'Post does not exist' } }; }
    return { code: 200, data: postId };
};

const createBlogPosts = async (title, content, categoryIds) => {
    const noTitle = await verifyTitle(title);
    const noContent = await verifyContent(content);
    const noCategoryIds = await verifyCategoryIds(categoryIds);
    if (noTitle) {
        return { code: 400, data: { message: noTitle.message } };
    } if (noContent) {
      return { code: 400, data: { message: noContent.message } };
  } if (noCategoryIds) {
    return { code: 400, data: { message: noCategoryIds.message } };
}
const categoriesIdExist = categoryIds.every((idUser) => categoryIds.includes(idUser));
if (!categoriesIdExist) return { code: 400, data: { message: '"categoryIds" not found' } };
    const newPost = await BlogPost.create({ title, content });
    const { dataValues } = newPost;
    
    return { code: 201, data: dataValues };
};

module.exports = { listBlogPosts, createBlogPosts, listBlogPostsById };