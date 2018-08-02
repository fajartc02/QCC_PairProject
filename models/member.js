'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill name'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill age'
        },
        isNumeric: {
          args: true,
          msg: 'please input number'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill gender'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill email'
        },
        isEmail: {
          args: true,
          msg: 'invalid email'
        },
        isUnique: function(value, next) {
          Teacher.findOne({
            where: {
              email: value,
              id: {
                [Op.ne]: this.id
              }
            }
          })
          .then(user => {
            if(user) {
              return next('Email already in use!');
            }
            next()
          })
          .catch(err => {
            return next(err)
          })
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill username'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill password'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill role'
        }
      }
    },
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