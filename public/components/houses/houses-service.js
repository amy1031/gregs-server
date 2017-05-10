function HousesService() {
    var url = 'http://localhost:9004/houses'

    this.createHouse = function(house){
        $.post(url, house).then(function(res) {
            console.log(res)
        })
    }

    this.getHouses = function(){
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