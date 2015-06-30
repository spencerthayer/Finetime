/**////////////////////
// SHADOW
// shadow.js
/**////////////////////
function shadowMove() {
    var shadowObject = $('.shadow')
    var textCenterTop = (shadowObject.offset().top + (shadowObject.height() /2));
    var textCenterLeft = (shadowObject.offset().left + (shadowObject.width() /2));
    var deltaX = (sunx)*-1;
    var deltaY = (suny)*-1;
    var deltaVar = .025;
    var shadowBlur = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    var shadowXCalc = deltaX*deltaVar;
    var shadowYCalc = deltaY*deltaVar;
    var shadowBlurCalc = shadowBlur*deltaVar*2;
    var shadowColor = "rgba(25,0,75,1)";
    shadowObject.css({
        "text-shadow": shadowXCalc+"vmin "+shadowYCalc+"vmin " +shadowBlurCalc+"vmin "+shadowColor,
        "-webkit-text-shadow": shadowXCalc+"vmin "+shadowYCalc+"vmin " +shadowBlurCalc+"vmin "+shadowColor,
        "-moz-text-shadow": shadowXCalc+"vmin "+shadowYCalc+"vmin " +shadowBlurCalc+"vmin "+shadowColor,
        "-o-text-shadow": shadowXCalc+"vmin "+shadowYCalc+"vmin " +shadowBlurCalc+"vmin "+shadowColor
    });
}