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
    //starMap();
    //shadowMove();
    //runStarMap();
},1000*10);
setInterval(function(){
    getWeather();
},(1000*60)*10);