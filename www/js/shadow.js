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