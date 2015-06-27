/**/////////////////////
// GRADIENT BACKGROUND
// gradient.js
/**/////////////////////
function gradientSky() {
    var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
    var hh = datetime.getHours();
    var mm = datetime.getMinutes();
    var ss = datetime.getSeconds();
    var mmss = mm+(ss/60);
    var percentRemain = mmss/60;
    var percentTime = 1-(mmss/60);
    var nightMod = 0;
    //console.log("%: "+ mmss +" / "+ percentTime +" / "+ percentRemain +" / "+ (percentTime+percentRemain));
    $("body").addClass("background-"+hh);
    $("#skyTop").velocity (
        { opacity: percentTime }
    ); 
    $("#skyTop").removeClass("sky-gradient-"+(hh-1));
    $("#skyTop").addClass("sky-gradient-"+hh);
    $("#skyBot").velocity (
        { opacity: 1 /*percentRemain+nightMod*/ }
    );
    $("#skyBot").removeClass("sky-gradient-"+hh);
    $("#skyBot").addClass("sky-gradient-"+(hh+1));
    //setTimeout(gradientSky,1000*10);
}