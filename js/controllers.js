/**
 * Created by Nisal on 9/22/2016.
 */

// Angular controller
app.controller('weatherController', function($scope,weatherService) {

    //call getCities service function
    weatherService.getCities().then(function(data) {

        var string = '';
        angular.forEach(data.List, function(value){

            if(string==''){
                string = value.CityCode;
            }else{
                string = string+','+value.CityCode;
            }

        });


        //call getWeather service function with the  parameter
        weatherService.getWeather(string).then(function(data) {
            $scope.weather.data = data;
        });

    });


});