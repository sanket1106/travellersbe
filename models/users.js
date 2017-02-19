var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	_id: { type : String, required : true},
	username : { type : String, required : false},
	emailId : { type : String, required : false},
	firstName: { type : String, required : false},
	lastName : { type : String, required : false},
	userType : { type : String, required : false},
	mobileNo : { type : Number, required : false},
	landlineNo : { type : Number, required : false},
	isActive: { type : Boolean, required : false},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', usersSchema, 'Users');
