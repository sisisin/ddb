/* eslint new-cap:0 */
const router = require('express').Router();
const _ = require('lodash');
const db = require('../models/');
const moment = require('moment');

const getEvents = (req, res, next) => {
  return db.Event.findAll()
    .then((events) => {
      let send = {};

      send.title = 'events';
      send.events = _.map(events, (event) => {
        let checkData = {};
        let evDate = moment(event.dataValues.eventDate);

        checkData.eventName = event.dataValues.eventName;
        checkData.eventDate = evDate.format('YYYY/MM/DD');
        return checkData;
      });
      res.render('events', send);
    });
};

const postChecks = (req, res, next) => {
  const {
    eventName,
    spPrefix,
    spNo,
    spAlphabet,
    CircleId,
    notificationURL
    } = req.body;
  const hasAllParams = eventName ||
    spPrefix ||
    spNo ||
    spAlphabet ||
    CircleId ||
    notificationURL;
 
  if (!hasAllParams) return res.redirect(303, '/circles?err=err');
  
  return db.Check
    .upsert({
      eventName,
      spPrefix,
      spNo,
      spAlphabet,
      CircleId,
      notificationURL })
    .then((check) => {
      res.redirect(303, '/circles');
    })
    .catch((err) => {
      res.redirect(303, `/circles?err=err&msg=${err}`);
    });
};


router.get('/', getEvents);
router.post('/new', postChecks);


export { router as events };
export { getEvents, postChecks };	// for test
