module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {
      timestamps: false,
    });
    PostsCategories.associate = (models) => {
      models.Category.belongsToMany(
        models.BlogPost,
        { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategories, as: 'posts' },
      );
      models.BlogPost.belongsToMany(
        models.Category,
        { 
          foreignKey: 'postId', 
          otherKey: 'categoryId', 
          through: PostsCategories, 
          as: 'categories' },
      );  
};
    return PostsCategories;
  };