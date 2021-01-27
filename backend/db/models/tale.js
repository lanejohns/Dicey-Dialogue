'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tale = sequelize.define('Tale', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    comments: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Tale.associate = function(models) {
    Tale.belongsTo(models.User, { foreignKey: 'userId' })
    Tale.belongsToMany(models.Lore, { foreignKey: 'taleId', through: 'Liked_tales', otherKey: 'loreId'})
  };
  return Tale;
};