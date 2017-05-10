function HousesController() {
    var houseService = new HousesService()

    this.createHouse = function(e) {
       // debugger
        e.preventDefault()

        var house = {
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            beds: e.target.beds.value,
            baths: e.target.baths.value,
            price: e.target.price.value,
            sqft: e.target.sqft.value,
            description: e.target.description.value,
            picture: e.target.picture.value
        }

        houseService.createHouse(house)
    }

    this.getHouses = function() {
            houseService.getHouses() 
            .then(function(data) {
                drawHouses(data)
            })
    }

    function drawHouses(data) {
      //  debugger
        var elem = document.getElementById("house-list")
        var template = "";
        for(var i = 0; i < data.length; i++) {
            var h = data[i];
             template += `
                <div class="col-xs-12 col-md-4">
                <h2>${h.address}</h2>
                <h3>${h.city}, ${h.state}</h3>
                <h3>${h.beds} beds, ${h.state} baths</h3>
                </div>
        `
        }
        return elem.innerHTML = template
    }
}