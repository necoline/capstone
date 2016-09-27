'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
//let passportLocalMongoose = require('passport-local-mongoose');

let Globe = new Schema({
	name: { type : String, unique : true, required : true },
	category: { type : String, required : true },
  latitude: { type : Array },
  longitude: { type : Array },
  magnitude: { type : Array }
});

//User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'Globe', Globe );
