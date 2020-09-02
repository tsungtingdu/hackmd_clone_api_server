'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collaborator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collaborator.belongsTo(models.User)
      Collaborator.belongsTo(models.Post)
    }
  };
  Collaborator.init({
    PostId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collaborator',
  });
  return Collaborator;
};