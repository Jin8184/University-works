var vcanvas, ctx;
var x, y;
var rdBig = 0;
var rdSmol = 0;

// var v=1;
function clear() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);

}

function updateStuffBigSlow() {
    rdBig += 0.02;
}

function updateStuffSmolFast() {
    rdSmol += 0.05;
}

function taegeuk(x, y, r) {

    //blue side
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, 0, 1 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    //red side
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, 0, 1 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    //bluesmol
    ctx.beginPath();
    ctx.moveTo(x+r/2, y);
    ctx.arc(x+r/2, y, r / 2, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    //redsmol
    ctx.beginPath();
    ctx.moveTo(x-r/2, y);
    ctx.arc(x-r/2, y, r / 2, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();    

}

function rdBigSlow() {
    updateStuffBigSlow();
    var v = 0.005; //velocity...?

    ctx.save(); //SPIN
    ctx.translate(x, y);
    ctx.rotate(rdBig);
    taegeuk(0, 0, 100);
    ctx.restore();

    if(rdBig>Math.PI * 2) {
        rdBig = 0;
    } else {
        rdBig += v;
    }   // 360도에 도달하면 0으로 리셋

    // console.log("actual spin");

}

function rdSmolFast() {

    updateStuffSmolFast();
    var v = 0.1; //velocity...?

    ctx.save(); //SPIN
    ctx.translate(x, y);
    ctx.rotate(-rdSmol);
    taegeuk(0, 0, 50);
    ctx.restore();

    if(rdSmol>Math.PI * 2) {
        rdSmol = 0;
    } else {
        rdSmol += v;
    }

    // console.log("lel");

}

function gameLoop() {
    clear();


    rdBigSlow();
    rdSmolFast();


    console.log("ticking...", rdSmol);


}


function init() {

    vcanvas = document.getElementById("myCanvas"); //myCanvas 인식 후 JS로 가져오기
    ctx = vcanvas.getContext("2d"); //컨텍스트 가져와서 기능 추가(2d)

    x = vcanvas.width / 2;
    y = vcanvas.height / 2;

    setInterval(gameLoop, 13);
}