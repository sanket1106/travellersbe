var mongoose = require('mongoose');

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/travellers');

var usersSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  email: String,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

var usersModel = mongoose.model('Users', usersSchema);

console.log("done");

var users=new usersModel({name:'Sanket Apte', active:true, email:'sanket1106@gmail.com', note:'First user'});
users.save(function(error){
	if(error)
		console.log(error);
	else
		console.log(users);
});

usersModel.create({name:'Saumin Kirve', active:true, email:'sauminkirve@gmail.com', note:'First user'}, function(error, users){
	if(error)
		console.log(error);
	else
		console.log(users);
});