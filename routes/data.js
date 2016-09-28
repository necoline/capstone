var express = require('express');
var router = express.Router();
var fs = require('fs');
var dir = process.cwd() + '/gender.json';

function readJSONFile(filename, callback) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

router.get('/', function(req, res, next) {
  console.log('GETTING DATA');
  readJSONFile(dir, (err, json) => {
  // readJSONFile('/Users/***NICOS PATH HERE****capstone/gender.json', (err, json) => {
  // readJSONFile('/Users/stormbringer3/Desktop/DevCap/capstone/gender.json', (err, json) => {
    res.json(json);
  })
})

module.exports = router;
