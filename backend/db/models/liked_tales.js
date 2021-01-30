'use strict';
module.exports = (sequelize, DataTypes) => {
  const Liked_tales = sequelize.define('Liked_tales', {
    userId: DataTypes.INTEGER,
    taleId: DataTypes.INTEGER
  }, {});
  Liked_tales.associate = function(models) {
    // associations can be defined here
    Liked_tales.belongsTo(models.User, { foreignKey: 'userId' })
    Liked_tales.belongsTo(models.Tale, { foreignKey: 'taleId' })
  };
  return Liked_tales;
};