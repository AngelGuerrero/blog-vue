'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    
    // Tag belongs to many posts through post_tags table
    Tag.belongsToMany(models.Post, {
      through: 'Post_Tags',
      as: 'posts'
    })
    
  };
  return Tag;
};