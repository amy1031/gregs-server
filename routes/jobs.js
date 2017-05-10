var router = require('express').Router();
var Job = require('./../models/job')

exports.mountPath = '/jobs';
exports.router = router;

router.route('/')
    .get(getJobs);

router.route('/')
    .post(createJob)

function getJobs(req, res, next) {
    Job.find({}).then(function(jobs) {
        res.send(jobs)
    })
}

function createJob(req, res, next) {
  var newJob = req.body
  Job.create(newJob)
    .then(function (newlyCreatedJob) {
      res.send(newlyCreatedJob)
    })
}