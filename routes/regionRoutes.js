var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var CityCountryMaster = require('../models/cityCountryMaster.js');
var regionService = require('../services/regionService.js');

/*
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
*/

router.get('/pushtoelastic', function(req, res, next) {
	return regionService.pushCityCountryMasterToElastic().then(function(data) {
		return res.json(data);
	});
});

module.exports = router;
