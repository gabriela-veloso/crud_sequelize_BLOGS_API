const {
    listBlogPosts, createBlogPosts, listBlogPostsById } = require('../services/blogPostsServices');

const listAllPosts = async (_req, res, next) => {
    try {
    const postsList = await listBlogPosts();
    return res.status(postsList.code).json(postsList.data);
    } catch (e) {
        next(e); 
    }
};

const listAllPostsById = async (req, res, next) => {
    try {
    const { id } = req.params;
    const postsListById = await listBlogPostsById(id);
    return res.status(postsListById.code).json(postsListById.data);
    } catch (e) {
        next(e); 
    }
};

const create = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const createNewPost = await createBlogPosts(title, content, categoryIds);
        return res.status(createNewPost.code).json(createNewPost.data);
    } catch (e) {
        next(e);
    }
};

module.exports = { listAllPosts, create, listAllPostsById };