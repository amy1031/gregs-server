// !! Database Stuff
var mongoose = require('mongoose')

// Car in the database
var Schema = mongoose.Schema
var CarSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    doors: {type: Number, required: true},
    condition: {type: String, required: true},
    color: {type: String, required: true},
    picture: {type: String, required: false},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    email: {type: String, required: true}
})

var Car = mongoose.model('Car', CarSchema)
// END Car

module.exports = Car;