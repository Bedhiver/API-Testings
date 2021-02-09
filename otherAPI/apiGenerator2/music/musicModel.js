/**
 * @typedef music
 * @property {string} _id
* @property {string} name
* @property {number} date
 */


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var musicSchema = new Schema({
	'name' : String,
	'date' : Number
}, { timestamps : true });
musicSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('music', musicSchema);
