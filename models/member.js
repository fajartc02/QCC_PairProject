'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  // why round must be 10??
  Member.beforeCreate(function(user) {
    const password = user.password;
    bcrypt.genSalt(10, function(err, salt) {
      if(err) throw (err);
      bcrypt.hash(password, salt,function(err, hash) {
        if(err) throw (err);
        user.password = hash;
        user.save();
      });
    });
  });
  Member.associate = function(models) {
    // associations can be defined here
    // Member.hasMany(models.MemberGroup)
    // Member.belongsTo(models.Group)
    Member.belongsToMany(models.Group, {through: models.MemberGroup})
  };
  return Member;
};