// !! Database Stuff
var mongoose = require('mongoose')

// Job in the database
var Schema = mongoose.Schema
var JobSchema = new Schema({
    title: {type: String, required: true},
    type: {type: String, required: false},
    city: {type: String, required: true},
    state: {type: String, required: true},
    description: {type: String, required: false},
    logo: {type: String, required: false},
    email: {type: String, required: true}
})

var Job = mongoose.model('Job', JobSchema)
// END Job

module.exports = Job;