'use strict';
module.exports = (sequelize, DataTypes) => {
  var MemberGroup = sequelize.define('MemberGroup', {
    MemberId: DataTypes.INTEGER,
    GroupId: DataTypes.INTEGER
  }, {});
  MemberGroup.associate = function(models) {
    // associations can be defined here
    MemberGroup.belongsTo(models.Member)
    MemberGroup.belongsTo(models.Group)
  };
  return MemberGroup;
};