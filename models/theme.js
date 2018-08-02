'use strict';
module.exports = (sequelize, DataTypes) => {
  var Theme = sequelize.define('Theme', {
    activityName: DataTypes.STRING,
    step: DataTypes.INTEGER
  }, {});
  Theme.associate = function(models) {
    // associations can be defined here
    Theme.belongsTo(models.Group)
  };
  return Theme;
};