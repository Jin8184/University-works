'use strict';
var vcanvas, ctx;
var ct = {x: 300, y: 200, r: 100};
var cm = {x: 450, y: 100, r: 50, v: 5};

var r_down, r_left, r_right, r_up;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}


function drawCT() {
    //CT = circle target
    ctx.beginPath();
    ctx.arc(ct.x, ct.y, ct.r, 0, Math.PI*2);
    if(hit_ct_cm()) {
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
    //center
    ctx.beginPath();
    ctx.arc(ct.x, ct.y, 2, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    //radius
    ctx.beginPath();
    ctx.moveTo(ct.x, ct.y);
    ctx.lineTo(ct.x, ct.y -100);
    ctx.stroke();
    //text
    ctx.fillText("R", ct.x - 20, ct.y - 40);
    ctx.fillText("(ct.x, ct.y)", ct.x - 35, ct.y + 20);

}

function hit_ct_cm() {
    var dx, dy, dist;
    dx = cm.x - ct.x;
    dy = cm.y - ct.y;  //빼는 순서 상관없음
    dist = Math.sqrt(dx*dx+dy*dy);

    if(dist < ct.r+cm.r) {
        return true;
    } else {
        return false;
    }
}

function info() {
    if(hit_ct_cm()) {
        ctx.fillText("상태: 충돌", 50, 50);
    } else {
        ctx.fillText("상태: 미충돌", 50, 50);
    }
}

function drawCM() {
    ctx.beginPath();
    ctx.arc(cm.x, cm.y, cm.r, 0, Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cm.x, cm.y, 2, 0, Math.PI*2);
    ctx.fill();
    //line
    ctx.beginPath();
    ctx.moveTo(cm.x, cm.y);
    ctx.lineTo(cm.x - 50, cm.y);
    ctx.stroke();
    //text
    ctx.fillText("(cm.x, cm.y)", cm.x + 10, cm.y + 5);
    ctx.fillText("R0", cm.x - 30, cm.y - 5);
    //line
    ctx.beginPath();
    ctx.moveTo(ct.x, ct.y);
    ctx.lineTo(cm.x, cm.y);
    ctx.strokeStyle = "blue";
    ctx.stroke();
}

function moveCM() {
    if (r_down){cm.y += cm.v;}
    if (r_left){cm.x -= cm.v;}
    if (r_right){cm.x += cm.v;}
    if (r_up){cm.y -= cm.v;}

}


function gameLoop() {
    clearCanvas();
    drawCT();
    moveCM();
    drawCM();
    info();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");
    ctx.font = "15px Arial";

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