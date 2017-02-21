var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Users = require('../models/users.js');
var responseService = require('../services/commonResponseService.js');

router.get('/', function(req, res, next) {
	Users.find(function(err, users) {
		if(err)
			return res.json(responseService.errorResponse(err));
			//return next(err);
		if(users.length != 0)
			res.json(responseService.successResponse(users));
		else
			res.json(responseService.notFoundResponse());
		//res.json(users);
	});
});

router.post('/', function(req, res, next) {
	var user = req.body;
	var newUser = new Users(user);
	
	newUser.save(function(err, users){
		if(err)
			return next(err);
		res.json(users);
	});
	/*
	Users.create(req.body, function(err, users) {
		if(err)
			return next(err);
		res.json(users);
	});
	*/
});

router.get('/login', function(req, res, next) {
	var emailId = req.query.email;
	var query = Users.find({'emailId':emailId});

	query.exec(function(err, user){
		if(err)
			//return next(err);
		return res.json(responseService.errorResponse(err, "Something went wrong!"));
		//res.json(user);
		if(user.length != 0)
			res.json(responseService.successResponse(user));
		else 
			res.json(responseService.notFoundResponse());
	});
});

module.exports = router;
