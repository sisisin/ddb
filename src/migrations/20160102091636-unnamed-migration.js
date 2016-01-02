'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('ALTER TABLE Checks ADD CONSTRAINT checks_ibfk_2 FOREIGN KEY (circleID) REFERENCES Circles(id) ON DELETE CASCADE ON UPDATE CASCADE;');
    },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('ALTER TABLE Checks DROP FOREIGN KEY checks_ibfk_2;');
  }
};
