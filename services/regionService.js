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
    for(let i = 0; i < 5; i++){
      var ccm = cityCountryMasters[i];
      esClient.bulk({
        body : [
          {index: {_index: 'citycountry', _type: 'citycountry', _id: ccm._id }},
          {cityName:ccm.cityName, countryName:ccm.countryName}
        ]
      }, function(err, response) {
        console.log(response);
      });
    }
    return responseService.successResponse("Success");
  });
}

exports.search = function search(searchString){
  esClient.search({
    index: 'citycountry',
    body:{
      query: {
        multi_match: {
          query : searchString,
          fields: ["countryName", "cityName"]
        }
      }
    }
  }, function(error, response){
    console.log(response);
    console.log(response.hits.hits);
  });
}
