'use strict';

let express = require('express');
let router = express.Router();
let Globe = require('../models/globe');

//Get home page
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//create data set entry points POST
router.post('/', (req, res) => {
  new Globe ({
    name: req.body.name,
    category: req.body.category,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    magnitude: req.body.magnitude
  }).save( (err, globe) => {
    res.json(globe);
  });
});
//append new points onto the data set PUT
router.put('/:id', (req, res) => {
  Globe.findById(req.params.id, (err, globe) => {
    globe.lattitude.push(req.body.latitude),
    globe.longitude.push(req.body.longitude),
    globe.magnitude.push(req.body.magnitude),
    globe.save( (err, globe) => {
      res.json(globe);
    })
  });
});
//delete the data point

module.exports = router;
