// Variables
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('Cors')
var server = express()
var port = 9004
var Car = require('./models/car')
var House = require('./models/house')
var Job = require('./models/job')

// !! Database Stuff
var mongoose = require ('mongoose')
var connectionString = 'mongodb://user:user@ds161487.mlab.com:61487/gregslist'
var connection = mongoose.connection

mongoose.connect(connectionString, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', function(err) {
    console.log('There was a connection problem', err)
});

connection.once('open', function() {
    console.log('We are now connected to the gregs list database')
    server.listen(port, function() {
        console.log('Connection is working', 'http:/localhost:' + port)
    })
})
// End DB stuff

// Parses the request data into json, gives access to req.body
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))

var routes = require('./routes');
server.use(routes.router);

server.get('/', function(req, res, next) {
    res.send(200, '<h1>What are you doing here?</h1>')
})


