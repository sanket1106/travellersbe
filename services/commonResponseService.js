exports.successResponse = function wrapSuccessResponseObject(data){
	var response = {};
	response['status'] = "SUCCESS";
	response['statusCode'] = 101;
	response['data'] = data;
	return response;
}

exports.errorResponse = function wrapFailureResponseObject(err, errorMessage){
	var response = {};
	response['status'] = "FAILURE";
	response['statusCode'] = 102;
	response["errorMessage"] = errorMessage;
	response['data'] = err;
	return response;
}

exports.notFoundResponse = function wrapNotFoundResponseObject(){
	var response = {};
	response['status'] = "NOT FOUND";
	response['statusCode'] = 103;
	return response;
}