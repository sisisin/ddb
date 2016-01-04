/* eslint new-cap:0 */
const router = require('express').Router();
const _ = require('lodash');
const db = require('../models/');


const getChecks = (req, res, next) => {
  return db.Check.findAll()
    .then((checks) => {
      let send;

      send = {};
      send.title = 'checks';
      send.checks = _.map(checks, (check) => {
//        const eventName = await fetchEventName(check);
        return _.pick(check.dataValues, ['eventName', 'spPrefix', 'spNo', 'spAlphabet', 'CircleId', 'notificationURL']);
      });

      res.render('checks', send);
    });
};

async function fetchEventName(check) {
  const event = await check.getEvent();
  return _.pick(event.dataValues, ['eventName']);
}

const postChecks = (req, res, next) => {
  const { eventName, spPrefix, spNo, spAlphabet, CircleId, notificationURL } = req.body;
  if (eventName || spPrefix || spNo || spAlphabet || CircleId || notificationURL) {
  } else {
    res.redirect(303, '/circles?err=err');
  }
  
  return db.Check
    .upsert({ eventName, spPrefix, spNo, spAlphabet, CircleId, notificationURL })
    .then((check) => {
      res.redirect(303, '/circles');
    })
    .catch((err) => {
      res.redirect(303, '/circles?err=err');
    });
};


router.get('/', getChecks);
router.post('/new', postChecks);


export { router as checks };
export { getChecks, postChecks };	// for test
