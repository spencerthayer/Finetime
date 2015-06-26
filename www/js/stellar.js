
/**/////////////////////
// STELLAR CALCULATIONS
// stellar.js
/**/////////////////////
function getStellar() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
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
    //
    //getStellar();
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
                    "background",
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
        if(!(datetime >= sunRise && datetime <= sunSet)) {
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
        if (!(datetime >= nightEndTime && datetime <= nauticalDuskTime)) {
            $("#starfield").show();
            $("#starfield").css(
                "background-blend-mode",
                "screen"
            );
        } else {
            $("#starfield").hide();
        }
    // LAUNCH STARMAP
        if (!(datetime >= nightEndTime && datetime <= nauticalDuskTime)) {
            starMap();
            $("#starmap").velocity(
                { display: "block" }
            );
            $("#starmap").css(
                "background-blend-mode",
                "screen"
            );
        } else {
            window.starMap=function(){return false;};
            $("#starmap").velocity(
                  { display: "none" }
            );
        }
    //window.onload = function() {
    //    setTimeout(starfield, 200);
    //};
    //$("#starfield").show();
    shadowMove();
    //return;
    //
    console.log(times);
    console.log("Sun Rise: "+sunRise);
    console.log("Sun Set: "+sunSet);
    console.log("Moon Rise: "+moonRise);
    console.log("Moon Set: "+moonSet);
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
            ground: false,
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