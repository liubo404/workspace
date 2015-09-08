var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('./passport');

mongoose.connect('mongodb://localhost/chapter01',
		 function(err){
		     if(err) throw err;
});


var app = express();
app.set('view engine', 'jade');
app.set('views',__dirname +'/views');

app.get('/',function(req,res,next){
	res.send('Hello world!');
    });

app.get('/jade', function(req,res,next){
	res.render('index.jade');
});

app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({secret:"my other 
secret string"}));

app.use(require('body-parser')());
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000);
console.log('Express started on port 3000');