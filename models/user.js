'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pasportLocalMongoose = require('passport-local-mongoose');

let User = new Schema({
	username: { type : String, unique : true, requited : true, dropDups: true },
	password: { type: String },
});

User.plugin(pasportLocalMongoose);

module.exports = mongoose.model( 'User', User );