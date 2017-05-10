var router = require('express').Router();
var Job = require('./../models/job')

exports.mountPath = '/jobs';
exports.router = router;

router.route('/')
    .get(getJobs);

router.route('/')
    .post(createJob)

router.route('/')
    .delete(deleteJob)

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

function deleteJob(req, res, next) {
    var id = req.params.id
    var removeJob = req.body

    Job.findByIdAndRemove(id).then(function() {
        res.send('Job Removed')
    })
}