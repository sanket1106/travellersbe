var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var client = mongoose.connect('mongodb://localhost/travellers')
	.then(() => console.log("DB Connection Successful"))
		.catch((err) => console.error(err));

module.exports = client;
