var mongoose = require('mongoose');
var CityCountryMaster = require('../models/cityCountryMaster.js');
var responseService = require('./commonResponseService.js');
var esClient = require('../config/connections/searchConnect.js');

exports.pushCityCountryMasterToElastic = function pushCityCountryMasterToElastic(){
  return CityCountryMaster.find(function(err, cityCountryMasters) {
    if(err){
      return responseService.errorResponse(err, "Something went wrong!");
    }
    console.log("length : "+cityCountryMasters.length);
    var cityCountries = new Array(10);
    for(let i = 0; i < 5; i++){
      var ccm = cityCountryMasters[i];
      var ccmIndex = {index: {_index: 'citycountry', _type: 'citycountry', _id: ccm._id }};
      esClient.bulk({
        body : [
          {index: {_index: 'citycountry', _type: 'citycountry', _id: ccm._id }},
          {cityName:ccm.cityName, countryName:ccm.countryName}
        ]
      }, function(err, response) {
        console.log(response);
      });
      //console.log("index object : "+ccmIndex);
      //var ccmDoc = {
        //  "cityName":ccm.cityName,
        //  "countryName":ccm.countryName
      //}
      //console.log("doc object : "+ccmDoc);
      //cityCountries.push(ccmIndex);
      //cityCountries.push(ccmDoc);
    }
    //console.log("array : "+cityCountries);
    return responseService.successResponse("Success");
  });
}
