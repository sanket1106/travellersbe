var mongoose = require('mongoose');
var Users = require('../models/users.js');
var responseService = require('./commonResponseService.js');

exports.userByEmailId = function getUserByEmailId(emailId){
  console.log("Searching for email id : "+emailId);
	var query = Users.find({'emailId':emailId});
  return query.exec(function(err, user){
		if(err)
		  return responseService.errorResponse(err, "Something went wrong!");
		if(user.length != 0){
      console.log("Found : "+user);
      return responseService.successResponse(user);
    }
		else {
      console.log("Not Found");
			return responseService.notFoundResponse();
    }
	});
}


exports.allUsers = function getAllUsers(){
  return Users.find(function(err, users) {
    if(err){
      return responseService.errorResponse(err, "Something went wrong!");
    }

    if(users.length != 0){
      return responseService.successResponse(users);
    }
    else {
      return responseService.notFoundResponse();
    }
  });
}
