var datetime    = new Date();
var latitude    = Math.abs(geoplugin_latitude());
var longitude   = Math.abs(geoplugin_longitude());
//var latitude  = Math.abs(gpsLat);
//var longitude = Math.abs(gpsLng);
var city        = geoplugin_city();
var region      = geoplugin_regionName();
var regionCode  = geoplugin_regionCode();
var country     = geoplugin_countryName();
//  Settings
var unit        = "f";//(f)fahrenheit|(c)celsius 
var hour24      = true;//Boolean
var showWeather = true;//Boolean
var showTimeDay = true;//Boolean

var degreesConversion = 180 / Math.PI;