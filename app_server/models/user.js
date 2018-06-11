var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	id: String,
	token: String,
	email: String,
	name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
