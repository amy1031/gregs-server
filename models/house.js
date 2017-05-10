// !! Database Stuff
var mongoose = require('mongoose')

// House in the database
var Schema = mongoose.Schema
var HouseSchema = new Schema({
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    beds: {type: Number, required: true},
    baths: {type: Number, required: true},
    price: {type: Number, required: true},
    sqft: {type: Number, required: true},
    description: {type: String, required: false},
    picture: {type: String, required: false}
})

var House = mongoose.model('House', HouseSchema)
// END House

module.exports = House;