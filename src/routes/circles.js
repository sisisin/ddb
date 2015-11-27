/* eslint new-cap:0 */
import express from 'express';
const _ = require('lodash');
const router = express.Router();
const db = require('../models/');

/* GET users listing. */
const getCircles = (req, res, next) => {
  return db.Circle.findAll()
    .then((circles) => {
      let send;

      send = {};
      send.title = 'circles';
      send.circles = _.map(circles, (cir) => {
        return {
          name: cir.dataValues.name
          , author: cir.dataValues.author
          , pixivURL: cir.dataValues.pixivURL
        };
      });
      res.render('circles', send);
    });
};

const postCircles = (req, res, next) => {
  const { name, author, pixivURL } = req.body;

  return db.Circle
    .upsert({ name, author, pixivURL })
    .then((circle) => {
      res.redirect('/circles');
    })
    .catch((err) => {
      res.render('index', { title: 'error' });
    });
};

const newCircles = (req, res, next) => {
  res.render('circlesNew', { title: 'new' });
};

router.get('/', getCircles);
router.post('/', postCircles);
router.get('/new', newCircles);

export { router as circles };
export { getCircles };	// for test
