/**/////////////////////
// OPEN WEATHER API
// weather.js
// Notes on conditions and codes, http://openweathermap.org/weather-conditions
/**/////////////////////
function getWeather() {
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;
    $.getJSON(apiURL, function(data) {
        console.log(apiURL);
        console.log(data);
        var city = (data.name);
            console.log("Name: " + city);
            $("#city").html(city);
        var code = (data.weather[0].id);
            console.log("Code: " + code);
            $("#code").html(code);
        var icon = (data.weather[0].icon);
            console.log("Icon: " + icon);
            $("#icon").html(icon)
        var main = (data.weather[0].main);
            console.log("Main: " + main);
            $("#main").html(main);
        var description = (data.weather[0].description);
            console.log("Description: " + description);
            $("#description").html(description);
        var degrees = "\xB0";
        var kelvin = (data.main.temp)
            console.log("Kelvin: " + kelvin + degrees);
        var celsius = Math.round(kelvin - 273.15);
            console.log("Celsius: " + celsius + degrees);
        var fahrenheit = Math.round(((kelvin - 273.15)*9/5)+32)
            console.log("Fahrenheit: " + fahrenheit + degrees);
        var temperature = (fahrenheit);
            $("#temperature").html(temperature + degrees);
//        var checkTemp = function() {
//            if(fahrenheit < 49) {
//                $("#temperature").css("color", "#3A539B");
//            }
//            if(fahrenheit >= 50) {
//                $("#temperature").css("color", "#19B5FE");
//            }
//            if(fahrenheit >= 60) {
//                $("#temperature").css("color", "#F2784B");
//            }
//            if(fahrenheit >= 75) {
//                $("#temperature").css("color", "#D35400");
//            }
//            if(fahrenheit >= 85) {
//                $("#temperature").css("color", "#D91E18");
//            }
//        }; checkTemp();
//        function getTemperatureHue(kelvin) {
//            if (kelvin > 0) {
//                return Math.max(0, 50 - kelvin) * 180 / 50; // 0-179
//            } else {
//            return Math.min(240, 180 + -kelvin * 60 / 50); // 180-240
//            }
//        }
//        function updateWeatherColors(fahrenheit) {
//            var hue = getTemperatureHue(fahrenheit).toString();
//            var weatherColor = 'hsl(' + hue + ', 100%, 70%)';
//            var weatherColorContrast = 'hsl(' + hue + ', 100%, 30%)';
//            $("#temperature").css("color", weatherColor);
//        }
    });
}