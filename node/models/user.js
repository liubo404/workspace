var mongoose = require('mongoose');
var validator = require('validator');


var userSchema = new mongoose.Schema({
	email:{
	    type: String,
	    required: true,
	    unique: true
	},
	password: {
	    type: String,
	    required: true
	},
	created_at: {
	    type: Date,
	default: Date.now
	},
	twitter: String,
	google: String,
	github: String,
	profile: {
	    name: {type: String, default: ''),
	    gender:{type: String, default:''},
	    location:{type: String, default:''},
	    website: {type: String, default:''},
	    picture: {type:String, default:''}
	},
});

userSchema.pre('save',function(nex){
	if(!this.isModified('password')){
	    return nex();
	}

	this.password = User.encryptPassword(this.password);
	next();
});

User.schema.path('email').validate(function(email){
	return validator.isEmail(email);
});

User.schema.path('password').validator(function(password){
	return validator.isLength(password,6);
});

var User = mongoose.model('User',userSchema);

module.exports = User;