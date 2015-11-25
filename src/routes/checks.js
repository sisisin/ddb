/* eslint new-cap:0 */
import express from 'express';
const router = express.Router();
const _ = require('lodash');
const db = require('../models/');

/* GET users listing. */
const getChecks = (req, res, next) => {
  return db.Check.findAll()
    .then((checks) => {
      let send;

      send = {};
      send.title = 'checks';
      send.checks = _.map(checks, (check) => {
        return _.pick(check.dataValues, ['eventName', 'spPrefix', 'spNo', 'spAlphabet', 'CircleId', 'notificationURL']);
      });
      res.render('checks', send);
    });
};

router.get('/', getChecks);


export { router as checks };
export { getChecks };	// for test
