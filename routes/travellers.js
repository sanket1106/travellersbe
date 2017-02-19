var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Users = require('../models/users.js');

router.get('/', function(req, res, next) {
	Users.find(function(err, users) {
		if(err)
			return next(err);
		res.json(users);
	});
});

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

module.exports = router;
