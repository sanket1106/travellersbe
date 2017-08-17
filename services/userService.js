var mongoose = require('mongoose');
var Users = require('../models/users.js');
var responseService = require('./commonResponseService.js');

exports.userByEmailId = function getUserByEmailId(emailId){
  console.log("Searching for email id : "+emailId);
	var query = Users.find({'emailId':emailId});
  return query.exec(function(err, user){
		if(err)
			//return next(err);
		return responseService.errorResponse(err, "Something went wrong!");
		//res.json(user);
		if(user.length != 0){
      console.log("Found : "+user);
      //callback(user);
			return responseService.successResponse(user);
    }
		else {
      console.log("Not Found");
			return responseService.notFoundResponse();
    }
	});
}
