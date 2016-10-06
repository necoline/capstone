'use strict';

let express = require('express');
let router = express.Router();
let Globe = require('../models/globe');
var fs = require("fs");
//let population = require('../client/components/globe/population.json');

//Get home page
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//get globe for user on MyProject page
router.get('/user_globes', function(req, res, next) {
  console.log('GETTING GLOBES')
  Globe.find({userId: req.query.userId}, (err, globes) => {
    res.json(globes)
  })
})

router.get('/:id', function(req, res) {
  Globe.findById(req.params.id, (err, globe) => {
    res.json(globe);
  });
});

//create data set entry points POST
router.post('/', (req, res) => {
  new Globe ({
    userId: req.body.userId,
    name: req.body.name,
    category: req.body.category
    //latitude: req.body.latitude,
    //longitude: req.body.longitude,
    //magnitude: req.body.magnitude
  }).save( (err, globe) => {
    if (err)
      return res.json(err)
    return res.json(globe);
  });
});
//append new points onto the data set PUSH
router.put('/:id', (req, res) => {
  Globe.findByIdAndUpdate(req.params.id,
    { $push: {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      magnitude: req.body.magnitude
    }},
    { safe: true, new: true },
    (err, globe) => {
      if (err)
        console.log('ERROR')
      return res.json(globe)
    }
  );
});
//delete the data point

router.delete('/:id', (req, res) => {
  Globe.findById(req.params.id, (err, globe) => {
    globe.remove();
    res.status(200).send({success: true});
  });
});

router.put('/:id/delete_points', (req, res) => {
  let index = parseInt(req.body.index);
  Globe.findById(req.params.id, (err, globe) => {
    let latitude = [...globe.latitude.slice(0, index), ...globe.latitude.slice(index + 1, globe.latitude.length)];
    let longitude = [...globe.longitude.slice(0, index), ...globe.latitude.slice(index + 1, globe.longitude.length)];
    let magnitude = [...globe.magnitude.slice(0, index), ...globe.magnitude.slice(index + 1, globe.latitude.length)];
    globe.latitude = latitude;
    globe.magnitude = magnitude;
    globe.longitude = longitude;
    globe.save( (err, obj) => {
      return res.json(obj);
    })
  });
});




module.exports = router;
