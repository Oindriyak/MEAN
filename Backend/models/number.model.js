const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const numberSchema = new Schema({
    num: Number,
    entries: Array,
    timeOfEntry: Date,
})

// Export the model
const number = mongoose.model('numbers', numberSchema)

module.exports = number