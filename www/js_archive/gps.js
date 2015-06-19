// GPS Data
if (navigator.geolocation) {
    var timeoutVal = 10 * 1000 * 1000;
    var gpsLat = null;
    var gpsLng = null;
    navigator.geolocation.getCurrentPosition(
        function (position) {
            loadWeather(position.coords.latitude+','+position.coords.longitude);
            gpsLat = position.coords.latitude;
            gpsLng = position.coords.longitude;
            console.log(position);
            }
        );
    } else {
        alert("Geolocation is not working!");
    }
