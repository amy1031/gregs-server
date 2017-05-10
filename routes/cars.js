var router = require('express').Router();
var Car = require('./../models/car')

exports.mountPath = '/cars';
exports.router = router;

router.route('/')
    .get(getCars);

router.route('/')
    .post(createCar)

router.route('/')
    .delete(deleteCar)

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

function deleteCar(req, res, next) {
    var id = req.params.id
    var removeCar = req.body

    Car.findByIdAndRemove(id).then(function() {
        res.send('Car Removed')
    })
}