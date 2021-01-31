'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tale = sequelize.define('Tale', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    comments: DataTypes.STRING,
    username: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Tale.associate = function(models) {
    // Tale.belongsTo(models.User, { foreignKey: 'userId' })
    Tale.belongsToMany(models.User, { foreignKey: 'taleId', through: 'Liked_tales'})
    Tale.hasMany(models.Comment, { foreignKey: 'taleId'})
  };
  return Tale;
};