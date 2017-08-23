var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var responseService = require('../services/commonResponseService.js');
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
router.get('/search', function(req, res, next){
	var searchString = req.query.q;
	regionService.search(searchString);
	return responseService.successResponse("Done");
});

router.get('/pushtoelastic', function(req, res, next) {
	/*
	return regionService.pushCityCountryMasterToElastic().then(function(data) {
		return res.json(data);
	});
	*/
	regionService.pushCityCountryMasterToElastic();
	let response = responseService.successResponse("DONE");
	return res.json(response);
});

module.exports = router;
