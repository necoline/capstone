var express = require('express');
var router = express.Router();
var fs = require('fs');

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
  readJSONFile('/Users/hannahhubner/Desktop/DevPoint/HW/capstone/capstone/gender.json', (err, json) => {
    res.json(json);
  })
})

module.exports = router;