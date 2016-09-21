/**
 * Created by Nisal on 9/22/2016.
 */
app.factory('weatherService', function($http) {
    return {

        getCities: function() {

            //url for json file
            var URL = 'resources/Step1.json';
            var request = {
                method: 'GET',
                url: URL,

            };

            // Return the promise
            return $http(request)
                .then(function(response) {
                    return response.data;
                }).
                catch(function(response) {
                    return response.data;
                });
        },



        getWeather: function(string) {

            //url for openweathermap api
            var URL = 'http://api.openweathermap.org/data/2.5/group';
            var request = {
                method: 'GET',
                url: URL,
                params: {
                    id: string,
                    units: 'metric',
                    appid: '279b4be6d54c8bf6ea9b12275a567156'
                }
            };

            // Return the promise
            return $http(request)
                .then(function(response) {
                    return response.data;

                }).
                catch(function(response) {
                    return response.data;
                });
        }
    }
});