/* eslint new-cap:0 */
require('babel-polyfill');
const router = require('express').Router();
const _ = require('lodash');
const db = require('../models/');

async function fetchEventName(check) {
  return await check.getEvent().then((event) => event.dataValues.eventName);
}
async function fetchCircleName(check) {
  return await check.getCircle().then((circle) => circle.dataValues.name);
}

const getChecks = (req, res, next) => {
  return db.Check.findAll()
    .then(async(checks) => {
      let send;

      send = {};
      send.title = 'checks';
      send.checks = await Promise.all(_.map(checks, async(check) => {
        let checkData = _.pick(check.dataValues, ['spPrefix', 'spNo', 'spAlphabet', 'notificationURL']);
        checkData.eventName = await fetchEventName(check);
        checkData.circleName = await fetchCircleName(check);
        return checkData;
      }));
      res.render('checks', send);
    });
};



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
