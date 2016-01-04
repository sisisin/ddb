'use strict';
module.exports = function(sequelize, DataTypes) {
  var Check = sequelize.define('Check', {
    eventID: {
      type:DataTypes.INTEGER,
      reference: {
        model: 'Event',
        key: 'id'
      }
    },
    spPrefix: DataTypes.STRING,
    spNo: DataTypes.INTEGER,
    spAlphabet: DataTypes.STRING,
    circleID: {
      type:DataTypes.INTEGER,
      reference: {
        model: 'Circle',
        key: 'id'
      }
    },
    notificationURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Check.belongsTo(models.Circle, { as: 'circle', constraints: false });
        Check.belongsTo(models.Event, { as: 'event', constraints: false });
      }
    }
  });
  return Check;
};