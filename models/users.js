var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	_id: String, 
	username : String,
	emailId : String,
	firstName: String,
	lastName : String,
	userType : String,
	mobileNo : Number,
	landlineNo : Number,
	isActive: Boolean,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', usersSchema);
