var canvas = document.getElementById('terrain');
var ctx = canvas.getContext('2d');

var BASELINE = 20;
var ROUGHNESS = 0.5;
var ITERATIONS = 4;

/** POINT CLASS **/
var Point = function(x, y) {
this.x = x;
this.y = y;
}

Point.midpoint = function(p1, p2) {
return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);

}

function main() {

var width = makePowerOfTwo(window.innerWidth);
canvas.width = width;
canvas.height = BASELINE * 2;
console.log('width:', width);
var points = generatePoints(width);
drawLines(points);
}

function generatePoints(width) {
var displacement = 1.0;
var points = [];
var temp = [];
points[0] = new Point(0, 0);
points[1] = new Point(width, 0);

for (var i = 0; i < ITERATIONS; i++) {
temp = [];
for (var j = 0; j < points.length - 1; j++) {
var p1 = points[j];
var p2 = points[j + 1];
var mid = Point.midpoint(p1, p2);
mid.y += randomInRange(-displacement, displacement);
temp.push(p1, mid);
}
temp.push(points[points.length - 1]);
displacement *= ROUGHNESS;
points = temp;
}
return points;
}

function drawLines(points) {
console.log('points length:', points.length);
ctx.lineWidth = 1;
ctx.strokeStyle = "#fff";
ctx.beginPath();
for (var i = 1, len = points.length; i < len; i++) {
ctx.moveTo(points[i - 1].x, (points[i - 1].y * BASELINE) + BASELINE);
ctx.lineTo(points[i].x, (points[i].y * BASELINE) + BASELINE);
}
ctx.stroke();
ctx.closePath();

ctx.fillStyle = 'transparent';

//context.fillStyle = "transparent";
/* DOTS * /
for(var i = 0; i < points.length; i++) {
ctx.beginPath();
ctx.arc(points[i].x,(points[i].y * BASELINE) + BASELINE,2,0,Math.PI * 2);
ctx.closePath();
ctx.fill();
}
/**/

}

function makePowerOfTwo(num) {
console.log('making power of two:', num);
if (num != 0 && ((num * (num - 1)) == 0)) {
return num;
}

var size = 2;
while (size + 1 < num) {
size *= 2;
}
return size;
}

function randomInRange(min, max) {
var r = Math.random() * (max - min) + min;
console.log('r:', r);
return r;
}

main();