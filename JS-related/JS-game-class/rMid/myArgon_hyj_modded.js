'use strict';
var ctx, vcanvas;
var sx, sy;
var r_left, r_right, r_up, r_down;
var stype_hyj = 1; 
var fire_hyj;
var vel_hyj = 6;

var arrEnemy_hyj = [];
var arrRocket_hyj = [];
var arrWall_hyj = [];



function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function createWall_hyj() {
    var x_hyj, y_hyj, wh_hyj, c_hyj, v_hyj, count_hyj;

    wh_hyj = Math.floor(Math.random() * 31) + 10;
    x_hyj = 0 - wh_hyj;
    c_hyj = "#" + parseInt(Math.random()*0xffffff).toString(16);
    y_hyj = 5;
    v_hyj = Math.floor(Math.random()*2)+1;

    for(count_hyj = 0; count_hyj*wh_hyj < vcanvas.height; count_hyj+=1){
        arrWall_hyj.push({x : x_hyj, y: y_hyj, c: c_hyj, wh: wh_hyj, v: v_hyj});
        y_hyj += wh_hyj+5;
    }
}

function drawWall_hyj() {
    var i;
    for(i = 0; i < arrWall_hyj.length; i+=1){
        ctx.fillStyle = arrWall_hyj[i].c;
        ctx.beginPath();
        ctx.fillRect(arrWall_hyj[i].x, arrWall_hyj[i].y, arrWall_hyj[i].wh, arrWall_hyj[i].wh);
        }
}

function updateWall_hyj() {
    var i;
    for(i = 0; i < arrWall_hyj.length; i+=1){
        arrWall_hyj[i].x += arrWall_hyj[i].v;
    }
}

function deleteWall_hyj() {
    var i;
    for(i = 0; i < arrWall_hyj.length; i+=1){
        if(arrWall_hyj[i].x - arrWall_hyj[i].wh > vcanvas.width) {
            arrWall_hyj.splice(i, 1);
        }
    }
}

// Enemy
function createEnemy_hyj() {
    var x_hyj, y_hyj, r_hyj, c_hyj, v_hyj;

    r_hyj = Math.floor(Math.random() * 16) + 5;
    x_hyj = 0 - r_hyj;
    y_hyj = Math.floor(Math.random() * (vcanvas.height - r_hyj*2)) + r_hyj;
    c_hyj = "#" + parseInt(Math.random()*0xffffff).toString(16);
    v_hyj = Math.floor(Math.random()*2)+1;

    arrEnemy_hyj.push({x : x_hyj, y: y_hyj, c: c_hyj, r: r_hyj, v: v_hyj});

}

function drawEnemy_hyj() {
    var i;
    for(i = 0; i < arrEnemy_hyj.length; i+=1){
        ctx.fillStyle = arrEnemy_hyj[i].c;
        ctx.beginPath();
        // ctx.fillRect(arrEnemy_hyj[i].x, arrEnemy_hyj[i].y, arrEnemy_hyj[i].r, arrEnemy_hyj[i].r);
        ctx.arc(arrEnemy_hyj[i].x, arrEnemy_hyj[i].y, arrEnemy_hyj[i].r, 0, 2*Math.PI, true);
        ctx.fill();

        // ctx.fillStyle = "yellow";
        // ctx.font = "12px Arial";
        // ctx.fillText(i, arrEnemy_hyj[i].x+arrEnemy_hyj[i].r*(40/100), arrEnemy_hyj[i].y+arrEnemy_hyj[i].r*(60/100));
    
        }
}

function updateEnemy_hyj() {
    var i;
    for(i = 0; i < arrEnemy_hyj.length; i+=1){
        arrEnemy_hyj[i].x += arrEnemy_hyj[i].v;
    }
}

function deleteEnemy_hyj() {
    var i;
    for(i = 0; i < arrEnemy_hyj.length; i+=1){
        if(arrEnemy_hyj[i].x - arrEnemy_hyj[i].r > vcanvas.width) {
            arrEnemy_hyj.splice(i, 1);
        }    
    
    }
}

////////////////////////////// BUILD A WALL /////////////////////////////////////// 구조체 안 바꾸기는 이미 해봄

// Rocket
function createRocket_hyj() {
    if(fire_hyj) {
        if(stype_hyj != 2){
            arrRocket_hyj.push({x: sx-62, y: sy, r: 2, c: "green", v: 7});
        }
        if(stype_hyj === 2){
            arrRocket_hyj.push({x: sx-54, y: sy - 3, r: 2, c: "green", v: 7});
            arrRocket_hyj.push({x: sx-54, y: sy + 3, r: 2, c: "green", v: 7});
        }
        if(stype_hyj > 2){
            arrRocket_hyj.push({x: sx-22, y: sy - 13, r: 2, c: "green", v: 7});
            arrRocket_hyj.push({x: sx-22, y: sy + 13, r: 2, c: "green", v: 7});
        }
        if(stype_hyj > 3){
            arrRocket_hyj.push({x: sx-12, y: sy + 17, r: 2, c: "green", v: 7});
            arrRocket_hyj.push({x: sx-12, y: sy - 17, r: 2, c: "green", v: 7});
        }
    }
}

function drawRocket_hyj() {
    var i;
    for (i = 0; i < arrRocket_hyj.length; i += 1) {
        ctx.beginPath();
        ctx.fillStyle = arrRocket_hyj[i].c;
        // ctx.fillRect(arrRocket_hyj[i].x, arrRocket_hyj[i].y, arrRocket_hyj[i].rw, arrRocket_hyj[i].rh);
        ctx.arc(arrRocket_hyj[i].x, arrRocket_hyj[i].y, arrRocket_hyj[i].r, 0, 2*Math.PI, true);
        ctx.fill();

    }
}

function updateRocket_hyj() {
    var i;
    for (i = 0; i < arrRocket_hyj.length; i += 1) {
        arrRocket_hyj[i].x -= arrRocket_hyj[i].v;
    }
}

function deleteRocket_hyj() {
    var i;
    for (i = 0; i < arrRocket_hyj.length; i += 1) {
        if(arrRocket_hyj[i].x + arrRocket_hyj[i].r < 0) {
            arrRocket_hyj.splice(i, 1);
        }
    }
}

// Ship
function drawShip_hyj() {
    ctx.beginPath();
    ctx.moveTo(sx+15, sy);
    ctx.lineTo(sx, sy-15);
    ctx.lineTo(sx-60, sy);
    ctx.lineTo(sx, sy+15);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    if(stype_hyj === 2) {
        ctx.beginPath();
        ctx.fillRect(sx-52, sy-5, 10, 10);
    }
    if(stype_hyj > 2) {
        ctx.beginPath();
        ctx.fillRect(sx-20, sy-15, 10, 30);
    }
    if(stype_hyj > 3) {
        ctx.beginPath();
        ctx.fillRect(sx-10, sy-19, 10, 38)
    }
}

function updateShip_hyj() {
    if(r_right) {sx += vel_hyj;}
    if(r_left) {sx -= vel_hyj;}
    if(r_down) {sy += vel_hyj;}
    if(r_up) {sy -= vel_hyj;}

    if(stype_hyj === 4) {
        if(sx > vcanvas.width - 15) {sx = vcanvas.width - 15;}
        if(sx < 60) {sx = 60;}
        if(sy > vcanvas.height - 19) {sy = vcanvas.height - 19;}
        if(sy < 19) {sy = 19;}

    }
    if(stype_hyj != 4) {
        if(sx > vcanvas.width - 15) {sx = vcanvas.width - 15;}
        if(sx - 60 < 0) {sx = 60;}  //이런 방법도 가능!
        if(sy > vcanvas.height - 15) {sy = vcanvas.height - 15;}
        if(sy < 15) {sy = 15;}
    }
}

function info_hyj() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Enemy: " + arrEnemy_hyj.length + " / Rocket: " + arrRocket_hyj.length, 50, 50);
    ctx.fillText("Wall: " + arrWall_hyj.length, 50, 100);
}

function gameLoop_hyj() {
    clearCanvas();

    drawWall_hyj();
    updateWall_hyj();
    deleteWall_hyj();

    drawEnemy_hyj();
    updateEnemy_hyj();
    deleteEnemy_hyj();

    drawShip_hyj();
    updateShip_hyj();

    drawRocket_hyj();
    updateRocket_hyj();
    deleteRocket_hyj();

    info_hyj();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 700;
    sy = 200;

    setInterval(gameLoop_hyj, 33);
    setInterval(createEnemy_hyj, 400);
    setInterval(createRocket_hyj, 100);
    setInterval(createWall_hyj, 3000);
}

function setkey(event) {   // the term 'event' is fixed in this class
    if(event.keyCode === 37){r_left = 1;}
    if(event.keyCode === 38){r_up = 1;}
    if(event.keyCode === 39){r_right = 1;}
    if(event.keyCode === 40){r_down = 1;}

    // ctx.fillText(event.keyCode, 100, 100);

    if(event.keyCode === 49){stype_hyj = 1;}
    if(event.keyCode === 50){stype_hyj = 2;}
    if(event.keyCode === 51){stype_hyj = 3;}
    if(event.keyCode === 52){stype_hyj = 4;}

    if(event.keyCode === 32){fire_hyj = 1;}

}

function stopkey(event) {
    if(event.keyCode === 37){r_left = 0;}
    if(event.keyCode === 38){r_up = 0;}
    if(event.keyCode === 39){r_right = 0;}
    if(event.keyCode === 40){r_down = 0;}

    if(event.keyCode === 32){fire_hyj = 0;}
}

document.onkeydown = setkey;
document.onkeyup = stopkey;