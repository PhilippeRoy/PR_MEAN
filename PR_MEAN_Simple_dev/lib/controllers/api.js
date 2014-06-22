'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');
/**
 * Get Users 
 */
exports.getUsers = function(req, res) {
  return User.find(function (err, pr) {
    if (!err) {
      return res.json(pr);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);
    res.json(200, err); 
  });
};


