function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: unit,
    success: function(weather) {
        var weatherCode         = weather.code;
        var weatherTemp         = weather.temp;
        var weatherUnit         = weather.units.temp;
        var weatherCity         = weather.city;
        var weatherRegion       = weather.region;
        var weatherCurrently    = weather.currently;
        var weatherAltTemp      = weather.alt.temp;
        var weatherLink         = weather.link;
        var degree = "&#186;";
        $("#weatherCode").html("<i class=\"icon-"+weatherCode+"\"></i>");
        $("#weatherTemp").html(weatherTemp+degree);
        $("#weatherCity").html(weatherCity+", "+weatherRegion);
        $("#weatherCurrently").html(weatherCurrently);
        $("#weatherAltTemp").html(weatherAltTemp+degree);
        $("#degree").html(degree);
//        html = '<h2><i class="icon-'+weatherCode+'"></i> '+weatherTemp+'&deg;'+weatherUnit+'</h2>';
//        html += '<ul><li>'+weatherCity+', '+weatherRegion+'</li>';
//        html += '<li class="currently">'+weatherCurrently+'</li>';
//        html += '<li>'+weatherAltTemp+'&deg;C</li></ul>';  
//        $("#weather").html(html);
        console.log(weather);
        },
    error: function(error) { console.log(error); }
  });
}loadWeather();