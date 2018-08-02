'use strict';
module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    groupName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill group name'
        }
      }
    },
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    // Group.hasMany(models.Member)
    Group.hasMany(models.Theme)
    Group.belongsToMany(models.Member, {through: models.MemberGroup})
  };
  return Group;
};