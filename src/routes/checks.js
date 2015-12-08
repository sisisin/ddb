/* eslint new-cap:0 */
import express from 'express';
const router = express.Router();
const _ = require('lodash');
const db = require('../models/');


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

const postChecks = (req, res, next) => {
  res.redirect(303, '/circles');
};

router.get('/', getChecks);
router.post('/new', postChecks);


export { router as checks };
export { getChecks };	// for test
