'use strict';
var vcanvas, ctx;
var sx, sy, stype = 0, vel = 5;
var r_left, r_up, r_right, r_down;
var fire = 0, arrRocket = [];

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}
// Rocket
function createRocket() {
    if(fire) {
        if(stype != 1) {arrRocket.push({x: sx+60, y: sy-2, w: 5, h: 4, c: "green", v: 8});}
        if(stype === 1) {
            arrRocket.push({x: sx+52, y: sy-5, w: 5, h: 4, c: "green", v: 8});
            arrRocket.push({x: sx+52, y: sy+1, w: 5, h: 4, c: "green", v: 8});
        }
        if(stype > 1) {
            arrRocket.push({x: sx+20, y: sy-15, w: 5, h: 4, c: "green", v: 8});
            arrRocket.push({x: sx+20, y: sy+11, w: 5, h: 4, c: "green", v: 8});
        }
        if(stype === 3) {
            arrRocket.push({x: sx+10, y: sy-19, w: 5, h: 4, c: "green", v: 8});
            arrRocket.push({x: sx+10, y: sy+15, w: 5, h: 4, c: "green", v: 8});
        }
    }
}
function drawRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        ctx.fillStyle = arrRocket[i].c;
        ctx.fillRect(arrRocket[i].x, arrRocket[i].y, arrRocket[i].w, arrRocket[i].h);
    }
}
function updateRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        arrRocket[i].x += arrRocket[i].v;
    }
}
function deleteRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        if(arrRocket[i].x > vcanvas.width) {arrRocket.splice(i, 1);}
    }
}
// Ship
function drawShip() {
    ctx.beginPath();
    ctx.moveTo(sx - 15, sy);
    ctx.lineTo(sx, sy - 15);
    ctx.lineTo(sx + 60, sy);
    ctx.lineTo(sx, sy + 15);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    // Stype
    if(stype === 1) {ctx.fillRect(sx + 42, sy - 5, 10, 10);}
    if(stype > 1) {ctx.fillRect(sx + 10, sy - 15, 10, 30);}
    if(stype === 3) {ctx.fillRect(sx, sy - 19, 10, 38);}
}
function updateShip() {
    var h = 15;
    if(r_left) {sx -= vel;}
    if(r_up) {sy -= vel;}
    if(r_right) {sx += vel;}
    if(r_down) {sy += vel;}
    // 보정
    if(stype === 4) {h = 19;}
    if(sx - 15 < 0) {sx = 15;} 
    if(sx + 60 > vcanvas.width) {sx = vcanvas.width - 60;}
    if(sy - h < 0) {sy =  h;} 
    if(sy + h > vcanvas.height) {sy = vcanvas.height - h;}
}
// Game
function info() {
    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText("Rocket: " + arrRocket.length, 50, 50);
}
function gameLoop() {
    clearCanvas();
    drawShip();
    updateShip();

    drawRocket();
    updateRocket();
    deleteRocket();

    info();
}
function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 200;
    sy = 200;
    setInterval(createRocket, 100);
    setInterval(gameLoop, 33);
}
// key Control
function setKey(event) {
    if(event.keyCode === 48) {stype = 0;}
    if(event.keyCode === 49) {stype = 1;}
    if(event.keyCode === 50) {stype = 2;}
    if(event.keyCode === 51) {stype = 3;}
    // 이동용
    if(event.keyCode === 37) {r_left = 1;}
    if(event.keyCode === 38) {r_up = 1;}
    if(event.keyCode === 39) {r_right = 1;}
    if(event.keyCode === 40) {r_down = 1;}
    // fire
    if(event.keyCode === 32) {fire = 1;}
}
function stopKey(event) {
    if(event.keyCode === 37) {r_left = 0;}
    if(event.keyCode === 38) {r_up = 0;}
    if(event.keyCode === 39) {r_right = 0;}
    if(event.keyCode === 40) {r_down = 0;}
    // fire
    if(event.keyCode === 32) {fire = 0;}
}
document.onkeydown = setKey;
document.onkeyup = stopKey;