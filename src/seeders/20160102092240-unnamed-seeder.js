'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Checks', [
      {
        eventID: 1
        , spPrefix: 'シ'
        , spNo: 71
        , spAlphabet: 'a'
        , circleID: 12
        , notificationURL: 'http://www.pixiv.net/member.php?id=204506'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Checks', null, {});
  }
};
