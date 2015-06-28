/**/////////////////////
// STELLAR CALCULATIONS
// stellar.js
/**/////////////////////
function getStellar() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
    function isPositive(num) {
        if (num > 0) {
                return false;
            } else {
                return true;
            };
        };
// stellarTimes
    var times                   = SunCalc.getTimes(datetime, lat, lon);
        var nauticalDawn        = times.nauticalDawn;
        var dawnTime            = times.dawn;
        var sunRise             = times.sunrise;
        var sunriseEnd          = times.sunriseEnd;
        var solarNoon           = times.solarNoon;
        var goldenHour          = times.goldenHour;
        var goldenHourEnd       = times.goldenHourEnd;
        var sunsetStart         = times.sunsetStart;
        var sunSet              = times.sunset;
        var dusk                = times.dusk;
        var nauticalDusk        = times.nauticalDusk;
        var night               = times.night
        var nadir               = times.nadir
        var nightEnd            = times.nightEnd;
        var moonTimes           = SunCalc.getMoonTimes(datetime, lat, lon);
        var moonRise            = moonTimes.rise;
        var moonSet             = moonTimes.set;
//  sunPosition
    var sunPosition             = SunCalc.getPosition(datetime, lat, lon);
        var sunAzimuthX         = (sunPosition.azimuth * 75 / Math.PI)*-1;
        //var sunAzimuth180     = sunPosition.azimuth * 180 / Math.PI;
        //var sunAzimuth360     = (sunPosition.azimuth * 180 / Math.PI + 180) % 360
        var sunAltitudeY        = (sunPosition.altitude * 75 / Math.PI)*-1;
        //var sunAltitude180    = sunPosition.altitude * 180 / Math.PI;
        //var sunAltitude360    = (sunPosition.altitude * 180 / Math.PI + 180) % 360;
        var sunMath             = Math.abs( (sunAzimuthX + sunAltitudeY) / Math.PI ) %2;
        var sunSize             = Math.min(Math.max(parseInt(Math.abs( (sunAzimuthX / sunAltitudeY) / Math.PI ) *.5), 1), 1.75);
        var sunOpacity          = Math.min(Math.max(parseInt( Math.abs( (sunAltitudeY / sunAzimuthX) ) ), .5), .9);;
        sunx                    = sunAzimuthX;
        suny                    = sunAltitudeY;
// moonPosition
    var moonPosition            = SunCalc.getMoonPosition(datetime, lat, lon);
        var moonAzimuthX        = (moonPosition.azimuth * 75 / Math.PI)*-.8;
        //var moonAzimuth180    = moonPosition.azimuth * 180 / Math.PI;
        //var moonAzimuth360    = (moonPosition.azimuth * 180 / Math.PI + 180) % 360;
        var moonAltitudeY       = (moonPosition.altitude * 75 / Math.PI)*-.8;
        //var moonAltitude180   = moonPosition.altitude * 180 / Math.PI;
        //var moonAltitude360   = (moonPosition.altitude * 180 / Math.PI + 180) % 360;
        //var moonDistance      = moonPosition.distance * 180 / Math.PI;
        var getMoonIllumination = SunCalc.getMoonIllumination(datetime);
        var moonFraction        = getMoonIllumination.fraction;
        var moonPhase           = 1-getMoonIllumination.phase;
        var moonAngle           = isPositive(getMoonIllumination.angle);
        moonx                   = moonAzimuthX;
        moony                   = moonAltitudeY;
// LAUNCH SUN
    function launchSun() {
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
    }
// LAUNCH MOON
    function launchMoon() {
        if(!(datetime <= moonSet && datetime >= moonRise)) {
			drawPlanetPhase(
                document.body, moonPhase, moonAngle, {
                    diameter: 10,
                    earthshine: 0.1,
                    blur: 1-moonPhase,
                    lightColour: "rgba(235, 245, 255, 1)",
                    shadowColour: "rgba(15, 10, 25, 1)"
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
            };
    }
// LAUNCH STARFIELD
    function launchStarfield() {
        if(!(datetime >= nightEnd && datetime <= dusk)) {
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
    }
// LAUNCH STARMAP
    function launchStarmap() {
        if(!(datetime >= nightEnd && datetime <= nauticalDusk)) {
            $("#starmap").velocity(
                { display: "block" }
            );
            $("#starmap").css(
                "background-blend-mode",
                "screen"
            );
        } else {
            window.starMap=function(){return false;};
            $("#starmap").hide();
        }
    }
    // LAUNCH FUNCTIONS
    launchSun();
    launchMoon();
    launchStarfield();
    launchStarmap();
    // DEFINE FUNCTIONS
    shadowMove();
/**/////////////////////
// CONSOLE LOG INFO
/**/////////////////////
//    console.log(times);
//    console.log("Sun Rise: "+sunRise);
//    console.log("Sun Set: "+sunSet);
//    console.log("Moon Set: "+moonSet);
//    console.log("Moon Rise: "+moonRise);
    console.log(datetime);
    console.log("nauticalDawn: "+nauticalDawn);
    console.log("dawnTime: "+dawnTime);
    console.log("sunRise: "+sunRise);
    console.log("sunriseEnd: "+sunriseEnd);
    console.log("solarNoon: "+solarNoon);
    console.log("goldenHour: "+goldenHour);
    console.log("goldenHourEnd: "+goldenHourEnd);
    console.log("sunsetStart: "+sunsetStart);
    console.log("sunSet: "+sunSet);
    console.log("dusk: "+dusk);
    console.log("nauticalDusk: "+nauticalDusk);
    console.log("night: "+night);
    console.log("nadir: "+nadir);
    console.log("nightEnd: "+nightEnd);
    console.log("moonRise: "+moonRise);
    console.log("moonSet: "+moonSet);
    console.log("moonFraction:"+moonFraction+"/"+"moonPhase:"+moonPhase+"/"+"moonAngle:"+moonAngle);
/**/////////////////////
}