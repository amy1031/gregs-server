function CarsController() {
    var carService = new CarsService()

    this.createCar = function(e) {
        e.preventDefault()

        var car = {
            make: e.target.make.value,
            model: e.target.model.value,
            year: e.target.year.value,
            doors: e.target.doors.value,
            condition: e.target.condition.value,
            color: e.target.color.value,
            picture: e.target.picture.value,
            description: e.target.description.value,
            price: e.target.price.value,
            email: e.target.email.value
        }

        carService.createCar(car)
    }

    this.getCars = function() {
        carService.getCars() 
            .then(function(data) {
                drawCars(data)
            })
    }

    function drawCars(data) {
      //  debugger
        var elem = document.getElementById("cars-list")
        var template = "";
        for(var i = 0; i < data.length; i++) {
            var c = data[i];
             template += `
                <div class="col-xs-12 col-sm-4">
                <h2>${c.year} ${c.make} ${c.model}</h2>
                <h3>$ ${c.price}</h3>
                <p class="description">${c.description}</p>
                </div>
        `
        }
        return elem.innerHTML = template
    }
}