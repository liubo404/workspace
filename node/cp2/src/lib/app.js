var express = require('express');
var app = express();

require('./parser')(app);

module.exports = app;

app.get('/path/:id', function(req,res,next){
	res.status(200).json({hello:'world'});
});