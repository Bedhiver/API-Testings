var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    doors: Number,
    name: { 
        type: String,
        trim: true,
        required: [true, 'Le nom est obligatoire']
     },
});

module.exports = mongoose.model('car', carSchema);
