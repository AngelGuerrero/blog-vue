'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    
    // Post belong to one user
    Post.belongsTo(models.User)
    
    // Post belongs have many tags
    Post.belongsToMany(models.Tag, {
      through: 'Post_Tags',
      unique: false,
      as: 'tags'
    })
    
  };
  return Post;
};