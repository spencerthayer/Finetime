
/**/////////////////////
// STELLAR CALCULATIONS
// stellar.js
/**/////////////////////
function getStellar() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
    function isPositive(num) {
        if(num > 0)
            return false;
        else
            return true;
        };
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
    // moonPosition
        var moonPosition            = SunCalc.getMoonPosition(datetime, lat, lon);
        var moonAzimuthX            = (moonPosition.azimuth * 75 / Math.PI)*-.8;
        //var moonAzimuth180          = moonPosition.azimuth * 180 / Math.PI;
        //var moonAzimuth360          = (moonPosition.azimuth * 180 / Math.PI + 180) % 360;
        var moonAltitudeY           = (moonPosition.altitude * 75 / Math.PI)*-.8;
        //var moonAltitude180         = moonPosition.altitude * 180 / Math.PI;
        //var moonAltitude360         = (moonPosition.altitude * 180 / Math.PI + 180) % 360;
        //var moonDistance            = moonPosition.distance * 180 / Math.PI;
        var getMoonIllumination     = SunCalc.getMoonIllumination(datetime);
        var moonFraction            = getMoonIllumination.fraction;
        var moonPhase               = 1-getMoonIllumination.phase;
        var moonAngle               = isPositive(getMoonIllumination.angle);
        moonx                   = moonAzimuthX;
        moony                   = moonAltitudeY;
    // LAUNCH SOL
        if(datetime >= sunRise && datetime <= sunSet) {
            $("#sun").velocity({
                translateX: sunx + "vw",
                translateY: suny + "vh",
                scale: sunSize,
                opacity: .95
            });
            $("#sun").css(
                "background",
                "linear-gradient(to bottom, rgba(255,255,119,1) 50%,rgba(255,225,130,"+sunOpacity+") 100%)"
            );
        } else {
            $("#sun").velocity({
                display: "none"
            });
        };
    // LAUNCH MOON
        if(!(datetime >= sunRise && datetime <= sunSet)) {
			drawPlanetPhase(
                document.body, moonPhase, moonAngle, {
                    diameter: 10,
                    earthshine: .1,
                    blur: 1-moonPhase,
                    lightColour: "rgba(235, 245, 255, 1)",
                    shadowColour: "rgba(25, 10, 45, .75)"
                }
            );
            $("#moon").velocity(
                {
                    translateX: moonx + "vw",
                    translateY: moony + "vh",
                }
            );
            $("#moon").velocity(
                    { opacity: .8 }
            );
        } else {
            $("#moon").hide();
            /*$("#moon").velocity(
                { display: "none" }
            );*/
            };
     // LAUNCH STARFIELD
        if (!(datetime >= nightEndTime && datetime <= nauticalDuskTime)) {
            if(!starfield.called) {
                starfield.called = true;
                starfield();
            }
            $("#starfield").show();
            $("#starfield").css(
                "background-blend-mode",
                "screen"
            );
        } else {
            window.starfield=function(){return false;};
            $("#starfield").hide();
        }
    // LAUNCH STARMAP
        if (!(datetime >= nightEndTime && datetime <= nauticalDuskTime)) {
            $("#starmap").velocity(
                { display: "block" }
            );
            $("#starmap").css(
                "background-blend-mode",
                "screen"
            );
        } else {
            window.starMap=function(){return false;};
            $("#starfield").hide();
            /*$("#starmap").velocity(
                  { display: "none" }
            );*/
        }
    shadowMove();
    /**/////////////////////
    // CONSOLE LOG INFO
    /**/////////////////////
    //console.log(times);
    //console.log("moonFraction:"+moonFraction+"/"+"moonPhase:"+moonPhase+"/"+"moonAngle:"+moonAngle);
    //console.log("Sun Rise: "+sunRise);
    //console.log("Sun Set: "+sunSet);
    //console.log("Moon Rise: "+moonRise);
    //console.log("Moon Set: "+moonSet);
    /**/////////////////////
}