/* eslint new-cap:0 */
const router = require('express').Router();
const _ = require('lodash');
const db = require('../models/');
const moment = require('moment');

const getEvents = (req, res, next) => {
  return db.Event.findAll({ order: [['eventDate', 'DESC']]})
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

const postEvents = (req, res, next) => {
  const { eventName, eventDate } = req.body;
  const hasAllParams = eventName || eventDate;
 
  if (!hasAllParams) return res.redirect(303, '/events?err=err');
  
  return db.Event
    .upsert({ eventName, eventDate })
    .then((check) => res.redirect(303, '/events'))
    .catch((err) => res.redirect(303, `/events?err=err&msg=${err}`));
};


router.get('/', getEvents);
router.post('/new', postEvents);


export { router as events };
export { getEvents, postEvents };	// for test
