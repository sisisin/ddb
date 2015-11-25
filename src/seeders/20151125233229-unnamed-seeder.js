'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Checks', [
      {
        eventName: 'コミックマーケット89'
        , spPrefix: 'シ'
        , spNo: 71
        , spAlphabet: 'a'
        , circleID: 1
        , notificationURL: 'http://www.pixiv.net/member.php?id=204506'
      }
      , {
        eventName: 'コミックマーケット88'
        , spPrefix: 'シ'
        , spNo: 21
        , spAlphabet: 'a'
        , circleID: 1
        , notificationURL: 'http://www.pixiv.net/member.php?id=204506'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Checks', null, {});
  }
};
