// Draw single blade
//copy/paste 3 times and make it one? Feels inefficient...
// beginpath, moveto, lineto, stroke, fill

var vcanvas, ctx;
var rd = 0;

function clear() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function drawSpinnything(x, y) {


    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(0 * Math.PI / 180);
    drawBlade(0, 0);
    ctx.rotate(90 * Math.PI / 180);
    drawBlade(0, 0);
    ctx.rotate(180 * Math.PI / 180);
    drawBlade(0, 0);
    ctx.rotate(270 * Math.PI / 180);
    drawBlade(0, 0);

    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y+0, 15, 0, 2*Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x+10, y);
    ctx.arc(x, y+0, 10, 0, 2*Math.PI, true);
    ctx.strokeStyle = "yellow";
    ctx.stroke();


}


function drawBlade(x, y) {

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(x, y-50);
    ctx.lineTo(x, y);
    ctx.lineTo(x+40, y);    //edge of the folded part
    ctx.lineTo(x+50, y-95);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(x, y-40);
    ctx.lineTo(x, y-150);
    ctx.lineTo(x+50, y-95);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.fill();

}

function spinThing() {
    var v = 0.05;

    ctx.beginPath();    //green stick
    ctx.moveTo(200, 200);
    ctx.fillStyle = "green";
    ctx.fillRect(200-5, 200, 10, 180);

    ctx.save(); //SPIN
    ctx.translate(200, 200);
    ctx.rotate(rd);
    drawSpinnything(0, 0);
    ctx.restore();

    if(rd>Math.PI * 2) {
        rd = 0;
    } else {
        rd += v;
    }
}

function gameLoop() {
    clear();

    spinThing();

    console.log("ticking...");

}


function init() {

    vcanvas = document.getElementById("myCanvas"); //myCanvas 인식 후 JS로 가져오기
    ctx = vcanvas.getContext("2d"); //컨텍스트 가져와서 기능 추가(2d)


    drawSpinnything(200, 200);

    setInterval(gameLoop, 13);
}