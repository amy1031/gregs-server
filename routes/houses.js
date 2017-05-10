var router = require('express').Router();
var House = require('./../models/job')

exports.mountPath = '/houses';
exports.router = router;

router.route('/')
    .get(getHouses);

router.route('/')
    .post(createHouse)

function getHouses(req, res, next) {
    House.find({}).then(function(houses) {
        res.send(houses)
    })
}

function createHouse(req, res, next) {
  var newHouse = req.body
  House.create(newHouse)
    .then(function (newlyCreatedHouse) {
      res.send(newlyCreatedHouse)
    })
}