'use strict';
module.exports = (sequelize, DataTypes) => {
  var MemberGroup = sequelize.define('MemberGroup', {
    MemberId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill group name'
        }
      }
    },
    GroupId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill group name'
        }
      }
    },
  }, {});
  MemberGroup.associate = function(models) {
    // associations can be defined here
    MemberGroup.belongsTo(models.Member)
    MemberGroup.belongsTo(models.Group)
  };
  return MemberGroup;
};