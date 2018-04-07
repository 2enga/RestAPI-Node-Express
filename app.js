var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get(function(res, req) {
	res.send('Welcome to my API');
});

app.listen(port, function(){
	console.log('Hey man! So its running on port: ' + port);
});