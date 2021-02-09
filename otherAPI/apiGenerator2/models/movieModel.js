/**
 * @typedef movie
 * @property {string} _id
* @property {string} name
* @property {number} date
 */


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var movieSchema = new Schema({
	'name' : String,
	'date' : Number
}, { timestamps : true });
movieSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('movie', movieSchema);
