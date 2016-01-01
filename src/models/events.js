'use strict';
module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};