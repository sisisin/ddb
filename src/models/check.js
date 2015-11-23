'use strict';
module.exports = function(sequelize, DataTypes) {
  var Check = sequelize.define('Check', {
    eventName: DataTypes.STRING,
    spPrefix: DataTypes.STRING,
    spNo: DataTypes.INTEGER,
    spAlphabet: DataTypes.STRING,
    circleID: DataTypes.INTEGER,
    notificationURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Check.belongsTo(models.Circle);
      }
    }
  });
  return Check;
};