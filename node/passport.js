var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserialzeUser(function(id,done){
	User.findById(id,done);
});

function authFail(done){
    done(null, false, {message: 'incorrect email/password combination'});
}

passport.use(new LocalStrategy(function(email,password,done){
	    User.findOne({email: email},function(err, user){
		    if(err) return done(err);
		    if(!user) {
			return authFail(done);
		    }
		    if(!user.validPassword(password)){
			return authFail(done);
		    }
		    return done(null,user);
		});
}));