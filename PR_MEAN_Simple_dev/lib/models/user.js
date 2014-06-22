'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  password: String
});

module.exports = mongoose.model('User', UserSchema);
