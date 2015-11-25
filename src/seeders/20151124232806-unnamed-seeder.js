'use strict';
const db = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Circles', [
      {
        name: 'にのこや'
        , author: 'にのこ'
        , pixivURL: 'http://www.pixiv.net/member.php?id=204506'
      }
      , {
        name: 'まろん☆まろん'
        , author: 'まろん☆まろん'
        , pixivURL: 'http://www.pixiv.net/member.php?id=4727246'
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Circles', null, {});
  }
};
