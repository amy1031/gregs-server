var router = require('express').Router();
var Car = require('./../models/car')

exports.mountPath = '/cars';
exports.router = router;

router.route('/')
    .get(getCars);

router.route('/')
    .post(createCar)

function getCars(req, res, next) {
    Car.find({}).then(function(cars) {
        res.send(cars)
    })
}

function createCar(req, res, next) {
  var newCar = req.body
  Car.create(newCar)
    .then(function (newlyCreatedCar) {
      res.send(newlyCreatedCar)
    })
}