'use strict';

let express = require('express');
let router = express.Router();
let addGlobe = require('../models/addGlobe');

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
  }).save( (err, course) => {
    res.json(globe);
  })
})
//append new points onto the data set PUT

module.exports = router;
