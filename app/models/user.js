var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
		eventName: String,
		age: String,
		field: String
});

module.exports = mongoose.model('timelineEvents', userSchema);