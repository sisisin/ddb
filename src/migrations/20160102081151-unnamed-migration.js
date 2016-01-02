'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('ALTER TABLE Checks ADD CONSTRAINT checks_ibfk_1 FOREIGN KEY (eventID) REFERENCES Events(id) ON DELETE CASCADE ON UPDATE CASCADE;');
    },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('ALTER TABLE Checks DROP FOREIGN KEY checks_ibfk_1;');
  }
};
