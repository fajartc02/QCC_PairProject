'use strict';
module.exports = (sequelize, DataTypes) => {
  var Theme = sequelize.define('Theme', {
    activityName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill group activity name'
        }
      }
    },
    step: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill step'
        }
      }
    },
    GroupId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'please fill GroupId'
        }
      }
    },
  }, {});
  Theme.associate = function(models) {
    // associations can be defined here
    Theme.belongsTo(models.Group)
  };
  return Theme;
};