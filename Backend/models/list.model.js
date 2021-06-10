const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
	title: String,
	value: [Object],
	show : Boolean,	
	username : String,
	id: Number
})

// Export the model
const list = mongoose.model('lists', listSchema)

module.exports = list