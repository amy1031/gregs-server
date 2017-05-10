function CarsService() {
    var url = 'http://localhost:9004/cars'

    this.createCar = function(car){
        $.post(url, car).then(function(res) {
            console.log(res)
        })
    }

    this.getCar = function(){
        return new Promise(function(resolve, reject) {
            $.get(url).then(
                function(data) {
                resolve(data);
              //  console.log(data)
            },
        function(error) {
          reject(error);
        }
      );
    });
	}
}