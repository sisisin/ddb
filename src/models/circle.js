'use strict';
module.exports = function(sequelize, DataTypes) {
  var Circle = sequelize.define('Circle', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    pixivURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Circle;
};
