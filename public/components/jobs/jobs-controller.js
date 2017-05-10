function JobsController() {
    var jobService = new JobsService()

    this.createJob = function(e) {
        e.preventDefault()

        var job = {
            title: e.target.title.value,
            type: e.target.type.value,
            city: e.target.city.value,
            state: e.target.state.value,
            description: e.target.description.value,
            logo: e.target.logo.value,
            email: e.target.email.value
        }

        jobService.createJob(job)
            
        jobService.jobHouse() 
            .then(function(data) {
                drawJobs(data)
            })
    }

    function drawJobs(data) {
      //  debugger
        var elem = document.getElementById("job-list")
        var template = "";
        for(var i = 0; i < data.length; i++) {
            var j = data[i];
             template += `
                <div class="col-xs-12 col-md-4">
                <h2>${j.title}</h2>
                <h3>${j.city}, ${j.state}</h3>
                <p>${j.description}</>
                </div>
        `
        }
        return elem.innerHTML = template
    }
}