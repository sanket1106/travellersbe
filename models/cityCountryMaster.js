var mongoose = require('mongoose');

var cityCountryMaster = new mongoose.Schema({
	_id : { type : Number, required : false},
    localeCode : { type : String, required : false},
    continentCode : { type : String, required : false},
    continentName : { type : String, required : false},
    countryIsoCode : { type : String, required : false},
    countryName : { type : String, required : false},
    subdivision1IsoCode : { type : String, required : false},
    subdivision1Name : { type : String, required : false},
    cityName : { type : String, required : false},
    timeZone : { type : String, required : false}
});

module.exports = mongoose.model('CityCountryMaster', cityCountryMaster, 'CityCountryMaster');