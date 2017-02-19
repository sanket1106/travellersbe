var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var CityCountryMaster = require('../models/cityCountryMaster.js');

router.get('/:searchString', function(req, res, next) {
	var searchString = req.params.searchString;
	console.log(searchString);
	var query = CityCountryMaster.find({'cityName':searchString});
	query.select('_id cityName countryName');
	query.exec(function(err, rows) {
		if(err)
			return next(err);
		res.json(rows);
	});
});

module.exports = router;