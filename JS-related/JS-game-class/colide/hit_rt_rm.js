'use strict';
var vcanvas, ctx;
var rt = {x: 150, y: 100, w: 200, h: 150};
var rm = {x: 400, y: 100, w: 150, h: 100, v: 5};

var r_down, r_left, r_right, r_up;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function drawRT() {
    if(hit()) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(rt.x, rt.y, rt.w, rt.h);
    }
    ctx.fillStyle = "black";
    ctx.strokeRect(rt.x, rt.y, rt.w, rt.h);
    ctx.fillText("(x0, y0)", rt.x - 30, rt.y - 5);
    ctx.fillText("(x1, y0)", rt.x + 180, rt.y - 5);
    ctx.fillText("(x0, y1)", rt.x - 30, rt.y + 165);
    ctx.fillText("(x1, y1)", rt.x + 180, rt.y + 165);
}

function drawRM() {
    ctx.fillStyle = "black";
    ctx.strokeRect(rm.x, rm.y, rm.w, rm.h);
    ctx.fillText("(a0, b0)", rm.x - 30, rm.y - 5);
    ctx.fillText("(a1, b0)", rm.x + 130, rm.y - 5);
    ctx.fillText("(a0, b1)", rm.x - 30, rm.y + 115);
    ctx.fillText("(a1, b1)", rm.x + 130, rm.y + 115);
}

function moveRM() {
    if (r_down){rm.y += rm.v;}
    if (r_left){rm.x -= rm.v;}
    if (r_right){rm.x += rm.v;}
    if (r_up){rm.y -= rm.v;}

}

function hit() {
    var x0, x1, y0, y1, a0, a1, b0, b1
    x0 = rt.x;
    x1=rt.x+rt.w;
    y0=rt.y;
    y1=rt.y+rt.h;
    a0=rm.x;
    a1=rm.x+rm.w;
    b0=rm.y;
    b1=rm.y+rm.h;
    if(x1>a0&&x0<a1&&y1>b0&&y0<b1) {
        return true;
    } else{return false;}
    /*
    if(rm.x<rt.x+200&&rm.x+150>rt.x && rm.y+100>rt.y&&rm.y<rt.y+150) {
        return true;
    } else {return false;}
    */
}

function info() {
    if(hit()) {
        ctx.fillText("상태: 충돌",50, 50);
    } else {
        ctx.fillText("상태: 미충돌",50, 50);
    }

}


function gameLoop() {
    clearCanvas();
    moveRM();
    drawRT();
    drawRM();

    info();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");
    ctx.font = "12px Arial";

    setInterval(gameLoop, 33);
}

function setkey(event) {   // the term 'event' is fixed in this class
    if(event.keyCode === 37){r_left = 1;}
    if(event.keyCode === 38){r_up = 1;}
    if(event.keyCode === 39){r_right = 1;}
    if(event.keyCode === 40){r_down = 1;}
}

function stopkey(event) {
    if(event.keyCode === 37){r_left = 0;}
    if(event.keyCode === 38){r_up = 0;}
    if(event.keyCode === 39){r_right = 0;}
    if(event.keyCode === 40){r_down = 0;}
}

document.onkeydown = setkey;
document.onkeyup = stopkey;