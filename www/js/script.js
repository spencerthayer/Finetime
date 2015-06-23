/**/////////////////////
// TIME CLOCK
// time.js
/**/////////////////////
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
datetime = new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
//tomorrowTime = new Date().addHours(24)
//yesterdayTime = new Date().addHours(-24);
function zeropadder(n) {
  return (parseInt(n,10) < 10 ? '0' : '')+n;
}
function updateTime(){
        var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
        var hh = datetime.getHours();
        var mm = datetime.getMinutes();
        var ss = datetime.getSeconds();
        var meridian = (hh >= 12?'pm':'am');
        var hh = hh % 12 || 12;
    $("#hour").html(zeropadder(hh));
    $("#minute").html(zeropadder(mm));
    $("#second").html(zeropadder(ss));
    $("#meridian").html(meridian);
    $("#colon").html(":");
    $("#date").html(moment().format('dddd, MMMM Do'));
    setTimeout(updateTime,1000);
}
function blink(){
    $(".blink").fadeOut(1000, function(){
        $(this).fadeIn(1000, function(){
            blink(this);
        });
    });
}
/**/////////////////////
// GRADIENT BACKGROUND
// gradient.js
/**/////////////////////
function gradientSky() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
    var mm = datetime.getMinutes();
    var ss = datetime.getSeconds();
    var mmss = mm+(ss/60);
    var percentRemain = mmss/60;
    var percentTime = 1-(mmss/60);
    //console.log("%: "+ mmss +" / "+ percentTime +" / "+ percentRemain +" / "+ (percentTime+percentRemain));
    $("#skyTop").velocity (
        { opacity: percentTime }
    ); 
    $("#skyTop").removeClass("sky-gradient-"+(hh-1));
    $("#skyTop").addClass("sky-gradient-"+hh);
    $("#skyBot").velocity (
        { opacity: percentRemain }
    );
    $("#skyBot").removeClass("sky-gradient-"+hh);
    $("#skyBot").addClass("sky-gradient-"+(hh+1));
    //setTimeout(gradientSky,1000*10);
}
/**/////////////////////
// GEO LOCATION
// geo.js
/**/////////////////////
if (geoPosition.init()) {
  geoPosition.getCurrentPosition(
      geoSuccess,
      geoError,
      {enableHighAccuracy:true},
      {maximumAge: 60000}
  );
}
function geoSuccess(position) {
    console.log(position);
    var latitude = position.coords.latitude;
        lat = latitude;
    var longitude = position.coords.longitude;
        lon = longitude;
    var altitude = position.coords.altitude;
        alt = altitude;
    var heading = position.coords.heading;
        heading = heading || 0;
        NSEW = heading;
    // EXPLICITLY DEFINE FUNCTIONS
        geoPrompt();
        getWeather();
        getSky();
        getStellar();
        starMap();
        //sound();
}
function geoError() {
    console.log("WARNING: NO GPS DATA RETURNED!");
}
function geoPrompt() {
    console.log(
        "Latitude: " + lat + 
        ", Longitude: " + lon + 
        ", Altitude: " + alt
    );
}
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
/**/////////////////////
// STELLAR CALCULATIONS
// stellar.js
/**/////////////////////
function getSky() {
    times                       = SunCalc.getTimes(datetime, lat, lon);
        nauticalDawnTime            = times.nauticalDawn;
        dawnTime                    = times.dawn;
        sunriseTime                 = times.sunrise;
        sunriseEndTime              = times.sunriseEnd;
        solarNoonTime               = times.solarNoon;
        goldenHourTime              = times.goldenHour;
        sunsetStartTime             = times.sunsetStart;
        sunsetTime                  = times.sunset;
        duskTime                    = times.dusk;
        nauticalDuskTime            = times.nauticalDusk;
        nightTime                   = times.night
        nadirTime                   = times.nadir
        nightEndTime                = times.nightEnd;    
        sunRise                     = times.sunrise;
        sunSet                      = times.sunset;
        moonTimes                   = SunCalc.getMoonTimes(datetime, lat, lon);
        moonRise                    = moonTimes.rise;
        moonSet                     = moonTimes.set;
    //var timex = moment(datetime).format(x);
    //console.log("TIME! " + timex);
    //  getTimes
//    var sunriseTime                 = moment.unix(times.sunrise);
//    var sunsetTime                  = moment.unix(times.sunset);
//    new Date(sunsetTime).getTime() / 1000).toFixed(0);
//    new Date(sunriseTime).getTime() / 1000).toFixed(0);
    console.log(times);
    console.log("Sun Rise: "+sunRise);
    console.log("Sun Set: "+sunSet);
    console.log("Moon Rise: "+moonRise);
    console.log("Moon Set: "+moonSet);
//    console.log("Test: "+ (sunSet - sunRise)/sunRise *100);
    // EXPLICITLY DEFINE FUNCTIONS
    getStellar();
    runStarMap();
}
function getStellar() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
    //  sunPosition
    var sunPosition                 = SunCalc.getPosition(datetime, lat, lon);
        var sunAzimuthX             = (sunPosition.azimuth * 75 / Math.PI)*-1;
        //var sunAzimuth180           = sunPosition.azimuth * 180 / Math.PI;
        //var sunAzimuth360           = (sunPosition.azimuth * 180 / Math.PI + 180) % 360
        var sunAltitudeY            = (sunPosition.altitude * 75 / Math.PI)*-1;
        //var sunAltitude180          = sunPosition.altitude * 180 / Math.PI;
        //var sunAltitude360          = (sunPosition.altitude * 180 / Math.PI + 180) % 360;
        var sunMath                 = Math.abs( (sunAzimuthX + sunAltitudeY) / Math.PI ) %2;
        var sunSize                 = Math.min(Math.max(parseInt(Math.abs( (sunAzimuthX / sunAltitudeY) / Math.PI ) *.5), 1), 1.75);
        var sunOpacity              = Math.min(Math.max(parseInt( Math.abs( (sunAltitudeY / sunAzimuthX) ) ), .5), .9);;
        sunx = sunAzimuthX;
        suny = sunAltitudeY;
    // LAUNCH SOL
            if(datetime >= sunRise && datetime <= sunSet) {
                $("#sun").velocity({
                    translateX: sunx + "vw",
                    translateY: suny + "vh",
                    scale: sunSize,
                    opacity: .95
                });
                $("#sun").css(
                    'background',
                    "linear-gradient(to bottom, rgba(255,255,119,1) 50%,rgba(255,225,130,"+sunOpacity+") 100%)"
                );
            } else {
                $("#sun").velocity({
                    display: "none"
                });
            };
      moonPosition
    var moonPosition                = SunCalc.getMoonPosition(datetime, lat, lon);
        var moonAzimuthX            = (moonPosition.azimuth * 75 / Math.PI)*-.8;
//        var moonAzimuth180          = moonPosition.azimuth * 180 / Math.PI;
//        var moonAzimuth360          = (moonPosition.azimuth * 180 / Math.PI + 180) % 360;
        var moonAltitudeY            = (moonPosition.altitude * 75 / Math.PI)*-.8;
//        var moonAltitude180         = moonPosition.altitude * 180 / Math.PI;
//        var moonAltitude360         = (moonPosition.altitude * 180 / Math.PI + 180) % 360;
//        var moonDistance            = moonPosition.distance * 180 / Math.PI;
        var moonx                   = moonAzimuthX;
        var moony                   = moonAltitudeY;
    // LAUNCH MOON
//        if(hh >= -0.1 && datetime <= sunriseEndTime || datetime >= duskTime && hh <= 25) {
        if(datetime >= moonRise && datetime <= moonSet) {
            $("#moon").velocity(
                {
                    translateX: moonx + "vw",
                    translateY: moony + "vh",
                }
            );
            $("#moon").velocity(
                    { opacity: .8 }
//                  { display: "block" }
            );
        } else {
                $("#moon").velocity(
                    { display: "none" }
                );
            };
     // LAUNCH STARFIELD
        if (hh >= -0.1 && datetime <= dawnTime || datetime >= nauticalDuskTime && hh <= 25) {
            $(".starfield").show();
        } else {
            $(".starfield").hide();
        }
    //window.onload = function() {
    //    setTimeout(starfield, 200);
    //};
    //$("#starfield").show();
    shadowMove();
    return;
}
/**////////////////////
// STARMAP
/**////////////////////
function starMap() {
        $.virtualsky({
            id: "starmap",
            projection: "stereo",
            live: true,
            /**/
            latitude: lat,
            longitude: lon,
            az: NSEW,
            showposition: false,
            /**/
            gradient: false,
            transparent: true,
            negative: false,
            magnitude: 3,
            scalestars: 1,
            /**/
            mouse: false,
            keyboard: false,
            /**/
            ground: true,
            cardinalpoints: false,
            constellations: true,
            constellationlabels: false,
            constellationboundaries: false,
            meteorshowers: false,
            showplanets: true,
            showplanetlabels: false,
            showorbits: false,
            showstars: true,
            showstarlabels: false,
            showdate: false,
            gridlines_az: false,
            gridlines_eq: false,
            gridlines_gal: false,
            gridstep: 30,
            ecliptic: false,
            meridian: false,
            showgalaxy: false,
            /**/
        });
}
function runStarMap() {
        var datetime= new Date();
        if (datetime >= moonRise && datetime <= moonSet) {
            $("#starmap").velocity(
                  { display: "block" }
            );
        } else {
            window.starMap=function(){return false;};
            $("#starmap").velocity(
                  { display: "none" }
            );
        }
}
/**////////////////////
// MOON PHASE
// moonphase.js
/**////////////////////

/**////////////////////
// SHADOW
// shadow.js
/**////////////////////
function shadowMove() {
    var shadowObject = $('.shadow')
    var textCenterTop = (shadowObject.offset().top + (shadowObject.height() /2))/2.5;
    var textCenterLeft = (shadowObject.offset().left + (shadowObject.width() /2))/2.5;
//  var mx = e.clientX;
//  var my = e.clientY;
    var deltaX = (/*textCenterLeft+*/sunx)*-1;
    var deltaY = (/*textCenterTop+*/suny)*-1;
    var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    shadowObject.css({
        "text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.5)",
        "-webkit-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.5)",
        "-moz-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.5)",
        "-o-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.5)"
    });
}
/**/////////////////////
// SOUND GENERATION
// sound.js
/** /////////////////////
function sound(){
var pitch = parseInt(300);
var osc = new Tone.Oscillator(pitch, "sine").toMaster();
osc.volume.value = -10;

var vibrato = new Tone.LFO(6, -25, 25)
	.connect(osc.detune)
	osc.start();
}sound();
/**/////////////////////
// INTERVALOMETER
// intervalometer.js
/**/////////////////////
setInterval(function(){
    updateTime();
    blink();
    gradientSky();
},1000/2);
setInterval(function(){
    getStellar();
//    starMap();
    shadowMove();
    runStarMap();
},1000*10);
setInterval(function(){
    getSky();
    getWeather();
},(1000*60)*10);
//"use strict";
/**/////////////////////
// CONSOLE
/**/////////////////////
//    console.log("Time: " + timetest + " !");
//    console.log("Sun's Altitude: " + sunAltitude360);
//    console.log("Sun's Azimuth: " + sunAzimuth360);
//    console.log("Sun X: " + sunx + ", Y: " + suny + ", Z: " /*+ sunz*/);
//    console.log("Moon's Altitude: " + moonAltitude360);
//    console.log("Moons's Azimuth: " + moonAzimuth360);
//    console.log("Moons's Distance: " + moonDistance);
//    console.log("Moon X: " + moonx + ", Y: " + moony + ", Z: " + /* moonz */);
/**/////////////////////
// END
/**/////////////////////