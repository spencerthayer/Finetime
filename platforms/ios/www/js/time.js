/////////////////////
// GRADIENT COLORS
/////////////////////
var grads = [
  [{color:"00000c",position:0},{color:"000019",position:0}],
  [{color:"020111",position:85},{color:"191621",position:100}],
  [{color:"020111",position:60},{color:"20202c",position:100}],
  [{color:"020111",position:10},{color:"3a3a52",position:100}],
  [{color:"20202c",position:0},{color:"515175",position:100}],
  [{color:"40405c",position:0},{color:"6f71aa",position:80},{color:"8a76ab",position:100}],
  [{color:"4a4969",position:0},{color:"7072ab",position:50},{color:"cd82a0",position:100}],
  [{color:"757abf",position:0},{color:"8583be",position:60},{color:"eab0d1",position:100}],
  [{color:"82addb",position:0},{color:"ebb2b1",position:100}],
  [{color:"94c5f8",position:1},{color:"a6e6ff",position:70},{color:"b1b5ea",position:100}],
  [{color:"b7eaff",position:0},{color:"94dfff",position:100}],
  [{color:"9be2fe",position:0},{color:"67d1fb",position:100}],
  [{color:"90dffe",position:0},{color:"38a3d1",position:100}],
  [{color:"57c1eb",position:0},{color:"246fa8",position:100}],
  [{color:"2d91c2",position:0},{color:"1e528e",position:100}],
  [{color:"2473ab",position:0},{color:"1e528e",position:70},{color:"5b7983",position:100}],
  [{color:"1e528e",position:0},{color:"265889",position:50},{color:"9da671",position:100}],
  [{color:"1e528e",position:0},{color:"728a7c",position:50},{color:"e9ce5d",position:100}],
  [{color:"154277",position:0},{color:"576e71",position:30},{color:"e1c45e",position:70},{color:"b26339",position:100}],
  [{color:"163C52",position:0},{color:"4F4F47",position:30},{color:"C5752D",position:60},{color:"B7490F",position:80},{color:"2F1107",position:100}],
  [{color:"071B26",position:0},{color:"071B26",position:30},{color:"8A3B12",position:80},{color:"240E03",position:100}],
  [{color:"010A10",position:30},{color:"59230B",position:80},{color:"2F1107",position:100}],
  [{color:"090401",position:50},{color:"4B1D06",position:100}],
  [{color:"000019",position:80},{color:"190900",position:100}],
];
/////////////////////
// TIME TO GRADIENT
/////////////////////
function toCSSGradient(data) {
    var css = "linear-gradient(to bottom, ";
    var len = data.length;

    for (var i = 0; i < len; i++) {
        var item = data[i];
        css += " #" + item.color + " " + item.position + "%";
        if (i < len - 1) css += ",";
    }
    return css + ")";
}
function updateTime() {
    d = moment();
    d.local();
    return d.hours();
}
function updateBasedOnNow() {
    setCSSGradientByIndex(updateTime());
}
function setCSSGradientByIndex(nInx) {
    if (nInx != inx) {
        inx = nInx;
        var data = grads[inx];
        if (data == null) return;
        // convert data to gradient
        var css = toCSSGradient(data);
        // update the background
        $("body").css("background", css);
    }
/////////////////////
// SET TIME
/////////////////////
    d.hours(inx);
    $("#hour").html(d.format('hh'));
    $("#minute").html(d.format('mm'));
    $("#second").html(d.format('ss'));
    $("#meridian").html(d.format('a'));
    $("#date").html(d.format('MMMM Do, YYYY'));
    // CONSOLE out put for DEBUGGING ONLY
    console.log(d.format('MMMM Do YYYY [\n]h:mm:ss a'));
}
/////////////////////
// ACTIVATE STARFIELD
/////////////////////
    var dt = new Date();
    var hour = dt.getHours();
    if (hour > -4 && hour < 5) {
        $('.starfield').show();
    }
    if (hour > 9 && hour < 16) {
        $('.clouds').show();
    }
/////////////////////
// GEO LOCATION
/////////////////////
function getLocation() {
    if (navigator.geolocation) {
        var timeoutVal = 10 * 1000 * 1000;
        navigator.geolocation.getCurrentPosition(
            showLocation,
            function () {
                showLocation(defaultLocation);
            }, {
                enableHighAccuracy: true,
                timeout: timeoutVal,
                maximumAge: 0
            }
        );
    } else {
        showLocation(defaultLocation);
        alert("Geolocation is not working!");
    }
}
function showLocation(position) {
    console.log(position);
    getSunInfo(position.coords.latitude, position.coords.longitude);
    getWeather(position.coords.latitude, position.coords.longitude, showWeather);
}
/////////////////////
// GET WEATHER
/////////////////////
function getWeather(lat, lon, callback) {
    var api = "http://api.openweathermap.org/data/2.5/weather";
    api += "?lat=" + lat;
    api += "&lon=" + lon;
    $("#weatherId").html("Loading weather!");
    $.ajax({
        url: api,
        dataType: 'jsonp',
        success: callback
    });
}
/////////////////////
// GET SUN POSITION
/////////////////////
function getSunInfo(lat, lng) {
    var data = new Date();
    var di = SunCalc.getDayInfo(data, lat, lng);
    var sunrisePos = SunCalc.getSunPosition(di.sunrise.start, lat, lng);
    var sunsetPos = SunCalc.getSunPosition(di.sunset.end, lat, lng);
    var sR = moment(di.sunrise.start);
    var sS = moment(di.sunset.end);
    var daylightHours = sS.diff(sR, 'hours');
    console.log("getDayInfo", di);
    console.log("daylightHours", daylightHours);
}
/////////////////////
// WEATHER OUTPUT
/////////////////////
function kelvinToFDegrees(kelvin) {
    return Math.round((1.8 * (kelvin - 273) + 32));
}
function showWeather(response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var weatherDesc = response.weather[0].description;
    var temp = kelvinToFDegrees(response.main.temp);
    var degree = "&#186;";
    var locationName = response.name;
    var geolocation = lat + ', ' + lon;
    $("#verb").html(weatherDesc);
    $("#temp").html(temp);
    $("#degree").html(degree);
    $("#city").html(locationName);
    $("#geolocation").html(geolocation);
    console.log(response);
    console.log(result);
}
/////////////////////
// WEATHER ICON
/////////////////////

/////////////////////
// XXX
/////////////////////
var d = moment();
var h = updateTime();
var inx = -1;
var defaultLocation = {
    coords: {
        latitude: 0.000,
        longitude: 0.000
    }
};
setCSSGradientByIndex(h);
getLocation();
/////////////////////
// CLOCK SPEED
/////////////////////
// TIME POLLING
var interval = setInterval(function () {
    updateBasedOnNow();
}, 1 * 60 );
// GEO POLLING
var interval2 = setInterval(function () {
    getLocation();
}, 1000 * 60 * 60 );
/////////////////////
// FORCE UPDATE
/////////////////////
$("#info").click(function () {
    updateBasedOnNow();
});
/////////////////////
// SHADOW
/////////////////////
var shadowObject = $('#info')
var textCenterTop = shadowObject.offset().top + (shadowObject.height() / 2);
var textCenterLeft = shadowObject.offset().left + (shadowObject.width() / 2);
$(document).on('mousemove', function(e) {
  var mx = e.clientX;
  var my = e.clientY;
  var deltaX = textCenterLeft - mx;
  var deltaY = textCenterTop - my;
  var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
  shadowObject.css({
    "text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,0,.5)",
    "-webkit-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,0,.5)",
    "-moz-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,0,.5)",
    "-o-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,0,.5)"
  });
});