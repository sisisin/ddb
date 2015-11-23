'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.renameTable('Events', 'Checks');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameTable('Checks', 'Events');
  }
};
