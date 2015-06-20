/**/////////////////////
// TIME
// time.js
/**/////////////////////
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
datetime = new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
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
function gradient() {
    var hh = datetime.getHours();
    var mm = datetime.getMinutes();
    var percentTime = (mm-60)/mm*.1;
    var percentOpacity = percentTime*-1;
    console.log(mm +" "+percentTime+" "+percentOpacity);
    $("#skyTop").animate (
        { opacity: percentOpacity }
    );
    $("#skyTop").addClass("sky-gradient-"+hh);
    $("#skyBot").animate (
        { opacity: 1 }
    );
    $("#skyBot").addClass("sky-gradient-"+(hh+1));
}gradient();
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
    // EXPLICITLY DEFINE FUNCTIONS
        geoPrompt();
        getWeather();
        getSky();
        getStellar();
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
    unixtime                    = moment.unix(datetime);
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
}
function getStellar() {
    var r                           = 1.75;
    var x                           = 1;
    //var hh = datetime.getHours();
    //var hx = hh % 12 || 12;
    //var meridian = (hh >= 12?'pm':'am');
    var stellarOpacity                  = .8
                                        //if(hh >= 12) { (hh-12)/hh*10; } else { (hh-12)/hh*-10; };
//    console.log("SUNOP:"+ hh +" / "+ hx +" / "+ stellarOpacity);
    //  sunPosition
    var sunPosition                 = SunCalc.getPosition(datetime, lat, lon);
        var sunAltitude180          = sunPosition.altitude * 180 / Math.PI;
        var sunAltitude360          = (sunPosition.altitude * 180 / Math.PI + 180) % 360;
        var sunAzimuth180           = sunPosition.azimuth * 180 / Math.PI;
        var sunAzimuth360           = (sunPosition.azimuth * 180 / Math.PI + 180) % 360;
        sunx = r * sunAzimuth180;
        suny = r * sunAltitude180;
    // LAUNCH SOL
            if(datetime >= sunRise && datetime <= sunSet) {
                $("#sun").velocity(
                    {
                        translateX: sunx + "%",
                        translateY: suny + "%",
                    }
                );
                $("#sun").velocity(
                    {
                        opacity: stellarOpacity,
                    }
                );
            } else { };
    //  moonPosition
    var moonPosition                = SunCalc.getMoonPosition(datetime, lat, lon);
        var moonAltitude180         = moonPosition.altitude * 180 / Math.PI;
        var moonAltitude360         = (moonPosition.altitude * 180 / Math.PI + 180) % 360;
        var moonAzimuth180          = moonPosition.azimuth * 180 / Math.PI;
        var moonAzimuth360          = (moonPosition.azimuth * 180 / Math.PI + 180) % 360;
        var moonDistance            = moonPosition.distance * 180 / Math.PI;
        var moonx                   = x * moonAzimuth180*-2;
        var moony                   = r * moonAltitude180*-2;
        console.log("dawnTime: " + dawnTime);
    // LAUNCH MOON
        if(datetime /*>= duskTime /*&& datetime <= sunriseEndTime*/) {
            $("#moon").velocity(
                {
                    translateX: moonx + "%",
                    translateY: moony + "%",
                }
            );
            $("#moon").velocity(
                {
                    opacity: stellarOpacity
                }
            );
        } else {};
     // LAUNCH STARFIELD
        if (datetime /*>= nauticalDuskTime /*&& datetime <= dawnTime*/) {
            $(".starfield").show();
//            starfield();
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
// MOON PHASE
// moonphase.js
/**////////////////////

/**////////////////////
// SHADOW
// shadow.js
/**////////////////////
function shadowMove() {
    var shadowObject = $('#content')
    var textCenterTop = (shadowObject.offset().top + (shadowObject.height() /2))/2.5;
    var textCenterLeft = (shadowObject.offset().left + (shadowObject.width() /2))/2.5;
//  var mx = e.clientX;
//  var my = e.clientY;
    var deltaX = (textCenterLeft+sunx)*-1;
    var deltaY = textCenterTop+suny;
    var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    shadowObject.css({
        "text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.75)",
        "-webkit-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.75)",
        "-moz-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.75)",
        "-o-text-shadow" : deltaX / 20 + "px " + deltaY / 20 + "px " + shadowBlur / 20 +"px " + "rgba(0,0,50,.75)"
    });
}
/////////////////////
// ACTIVATE SUN & STARFIELD
/////////////////////
//function skyconditions() {

//    if (hour > 6 && hour < 18) {
//        $(".sun").show();
//    } else {
//        $(".sun").hide();
//    }
//    if (hour > 5 && hour < 9) {
//        $(".sun").show();
//        $("#clock").css("color", "#20202c")
//    } else {
//        $("#clock").css("color", "#FFF")
//    }
//    window.setTimeout("skyconditions()", 1000*10);
//}
//    );
/** /////////////////////
//var datetime= new Date();
function gradient(){
        var hh = datetime.getHours();
        var mm = datetime.getMinutes();
        var ss = datetime.getSeconds();
        var grad_count = 24;
        var index = hh;
        var layer1 = document.createElement("div");
        var layer2 = document.createElement("div");
        var SPEED = ((60*60)*1000)-((mm*60)*1000);
    //console.log("Speed: " + SPEED);
    init();
    function init() {
        layer1.className = "sky-gradient-" + key (index);
        layer2.className = "sky-gradient-" + key (index + 1);
        apply_styles([layer1, layer2], {
            "position":"absolute",
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px",
            "z-index": "0"
        });
        layer2.style.opacity = 0;
        document.body.appendChild (layer1);
        document.body.appendChild (layer2);
        fade();
    }
    function fade() {
        var o = window.getComputedStyle(layer2).opacity;
        if( o < 1 ) {
            layer2.style.opacity = + o + .05;
            setTimeout(fade, SPEED);
        } else {
            layer2.style.opacity = 1;
            setTimeout(flip, SPEED);
        }
    }
    function flip() {
        if( index >= grad_count-1 ) {
            index = 0;
        }
        layer2.style.opacity = 0;
        layer1.className = "sky-gradient-" + key(++index);
        layer2.className = "sky-gradient-" + key(index+1);
        fade();
    }
    function apply_styles(elms, styles) {
        !Array.isArray(elms) && (elms = [elms]);
        for( var i = 0; i < elms.length; i++ ) {
            for( var key in styles ) {
                if( styles.hasOwnProperty(key) ) {
                    elms[i].style[key] = styles[key];
                }
            }
        }
    }
    function key(n) {
        return n < 10 ? "0" + n : n;
    }
}gradient();
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
},1000/2);
setInterval(function(){
    getStellar();
    shadowMove();
    gradient();
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