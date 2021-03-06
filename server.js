var express = require('express');
var logger = require('morgan')('dev');
var server = express();

server.use(express.static(__dirname + '/public'));
server.use(logger);

server.get('/', function(req,res){
	res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(8080, function(){
	console.log('Now listening on port 8080');  
});