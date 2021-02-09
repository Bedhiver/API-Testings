var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var personSchema = new Schema({
	'name' : String,
	'age' : Number
});

module.exports = mongoose.model('person', personSchema);
