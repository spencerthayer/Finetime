
//var degreesConversion = 180 / Math.PI;
var degreesConversion = .5 / Math.PI;
//  sunPosition
var sunPosition                 = SunCalc.getPosition(datetime, latitude, longitude);
    var sunAltitude             = sunPosition.altitude * degreesConversion;
    var sunAzimuth              = sunPosition.azimuth * degreesConversion;
//  getTimes
var times                       = SunCalc.getTimes(datetime, latitude, longitude);
//  nauticalDawn
var nauticalDawnTime            = times.nauticalDawn.toLocaleString();
    var nauticalDawnPos         = SunCalc.getPosition(times.nauticalDawn, latitude, longitude);
    var nauticalDawnAltitude    = nauticalDawnPos.altitude * degreesConversion;
    var nauticalDawnAzimuth     = nauticalDawnPos.azimuth * degreesConversion;
//  dawn
var dawnTime                    = times.dawn.toLocaleString();
    var dawnPos                 = SunCalc.getPosition(times.dawn, latitude, longitude);
    var dawnAltitude            = dawnPos.altitude * degreesConversion;
    var dawnAzimuth             = dawnPos.azimuth * degreesConversion;
//  sunrise
var sunriseTime                 = times.sunrise.toLocaleString();
    var sunrisePos              = SunCalc.getPosition(times.sunrise, latitude, longitude);
    var sunriseAltitude         = sunrisePos.altitude * degreesConversion;
    var sunriseAzimuth          = sunrisePos.azimuth * degreesConversion;
//  sunriseEnd
var sunriseEndTime              = times.sunriseEnd.toLocaleString();
    var sunriseEndPos           = SunCalc.getPosition(times.sunriseEnd, latitude, longitude);
    var sunriseEndAltitude      = sunriseEndPos.altitude * degreesConversion;
    var sunriseEndAzimuth       = sunriseEndPos.azimuth * degreesConversion;
//  solarNoon
var solarNoonTime               = times.solarNoon.toLocaleString();
    var solarNoonPos            = SunCalc.getPosition(times.solarNoon, latitude, longitude);
    var solarNoonAltitude       = solarNoonPos.altitude * degreesConversion;
    var solarNoonAzimuth        = solarNoonPos.azimuth * degreesConversion;
//  goldenHour
var goldenHourTime              = times.goldenHour.toLocaleString();
    var goldenHourPos           = SunCalc.getPosition(times.goldenHour, latitude, longitude);
    var goldenHourAltitude      = goldenHourPos.altitude * degreesConversion;
    var goldenHourAzimuth       = goldenHourPos.azimuth * degreesConversion;
//  sunsetStart
var sunsetStartTime             = times.sunsetStart.toLocaleString();
    var sunsetStartPos          = SunCalc.getPosition(times.sunsetStart, latitude, longitude);
    var sunsetStartAltitude     = sunsetStartPos.altitude * degreesConversion;
    var sunsetStartAzimuth      = sunsetStartPos.azimuth * degreesConversion;
//  sunset
var sunsetTime                  = times.sunset.toLocaleString();
    var sunsetPos               = SunCalc.getPosition(times.sunset, latitude, longitude);
    var sunsetAltitude          = sunsetPos.altitude * degreesConversion;
    var sunsetAzimuth           = sunsetPos.azimuth * degreesConversion;
//  dusk
var duskTime                    = times.dusk.toLocaleString();
    var duskPos                 = SunCalc.getPosition(times.dusk, latitude, longitude);
    var duskAltitude            = duskPos.altitude * degreesConversion;
    var duskAzimuth             = duskPos.azimuth * degreesConversion;
//  nauticalDusk
var nauticalDuskTime            = times.nauticalDusk.toLocaleString();
    var nauticalDuskPos         = SunCalc.getPosition(times.nauticalDusk, latitude, longitude);
    var nauticalDuskAltitude    = nauticalDuskPos.altitude * degreesConversion;
    var nauticalDuskAzimuth     = nauticalDuskPos.azimuth * degreesConversion;
//  night
var nightTime                   = times.night.toLocaleString();
    var nightPos                = SunCalc.getPosition(times.night, latitude, longitude);
    var nightAltitude           = nightPos.altitude * degreesConversion;
    var nightAzimuth            = nightPos.azimuth * degreesConversion;
//  nadir
var nadirTime                   = times.nadir.toLocaleString();
    var nadirPos                = SunCalc.getPosition(times.nadir, latitude, longitude);
    var nadirAltitude           = nadirPos.altitude * degreesConversion;
    var nadirAzimuth            = nadirPos.azimuth * degreesConversion;
//  nightEnd
var nightEndTime                = times.nightEnd.toLocaleString();
    var nightEndPos             = SunCalc.getPosition(times.nightEnd, latitude, longitude);
    var nightEndAltitude        = nightEndPos.altitude * degreesConversion;
    var nightEndAzimuth         = nightEndPos.azimuth * degreesConversion;
//  moonPosition
var moonPosition                = SunCalc.getMoonPosition(datetime, latitude, longitude);
    var moonAltitude            = moonPosition.altitude * degreesConversion;
    var moonAzimuth             = moonPosition.azimuth * degreesConversion;
    var moonDistance            = moonPosition.distance + "km";
//  moonLumens
var moonLumens                  = SunCalc.getMoonIllumination(datetime);
    var moonAngle               = moonLumens.angle;
    var moonFraction            = moonLumens.fraction;
    var moonPhase               = moonLumens.phase * degreesConversion;
//  moonTimes
var moonTimes                   = SunCalc.getMoonTimes(datetime, latitude, longitude);
    var moonRise                = moonTimes.rise.toLocaleString();
    var moonSet                 = moonTimes.set.toLocaleString();