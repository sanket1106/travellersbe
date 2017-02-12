var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send("Hello World");
})

app.get('/index', function(req, res){
	res.sendFile( __dirname + '/' + 'index.html');
})

app.get('/process_get', function(req, res){
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function(req, res){
	response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

var server = app.listen(8081, function(){
	console.log(server.address().address);
	console.log(server.address().port);
	console.log("Example app listening at http://%s:%s", server.address().address, server.address().port);
})
