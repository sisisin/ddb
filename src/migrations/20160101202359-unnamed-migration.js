'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn('Checks', 'eventName', {
      type: Sequelize.INTEGER
    })
    .then(function () {
      return queryInterface.renameColumn('Checks', 'eventName', 'eventID');
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Checks', 'eventID', {
      type: Sequelize.STRING
    })
    .then(function () {
      return queryInterface.renameColumn('Checks', 'eventID', 'eventName');
    });
  }
};
