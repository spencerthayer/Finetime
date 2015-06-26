/**/////////////////////
// TIME CLOCK
// time.js
/**/////////////////////
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
datetime = new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
//tomorrowTime = new Date().addHours(24)
//yesterdayTime = new Date().addHours(-24);
function zeropadder(n) {
  return (parseInt(n,10) < 10 ? '0' : '')+n;
}
function updateTime(){
        var datetime= new Date()./*FOR*/addHours(0)/*DEBUGGING*/;
        var hh = datetime.getHours();
        var mm = datetime.getMinutes();
        var ss = datetime.getSeconds();
        var meridian = (hh >= 12?'pm':'am');
        var hh = hh % 12 || 12;
    $("#hour").html(zeropadder(hh));
    $("#minute").html(zeropadder(mm));
    $("#second").html(zeropadder(ss));
    $("#meridian").html(meridian);
    $("#colon").html(":");
    $("#date").html(moment().format('dddd, MMMM Do'));
//    setTimeout(updateTime,1000);
}
function blink(){
    $(".blink").fadeOut(1000, function(){
        $(this).fadeIn(1000, function(){
            blink(this);
        });
    });
}