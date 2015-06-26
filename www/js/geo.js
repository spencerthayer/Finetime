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
        getStellar();
        starMap();
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