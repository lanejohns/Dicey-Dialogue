'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lore = sequelize.define('Lore', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  Lore.associate = function(models) {
    // associations can be defined here
    Lore.belongsTo(models.User, { foreignKey: 'userId'})
    Lore.belongsToMany(models.Tale, {foreignKey: 'loreId', through: 'Liked_tales', otherKey:'taleId'})
  };
  return Lore;
};