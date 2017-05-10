var router = require('express').Router();
var House = require('./../models/house')

exports.mountPath = '/houses';
exports.router = router;

router.route('/')
    .get(getHouses);

router.route('/')
    .post(createHouse)

router.route('/')
    .delete(deleteHouse)

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

function deleteHouse(req, res, next) {
    var id = req.params.id
    var removeHouse = req.body

    House.findByIdAndRemove(id).then(function() {
        res.send('House Removed')
    })
}