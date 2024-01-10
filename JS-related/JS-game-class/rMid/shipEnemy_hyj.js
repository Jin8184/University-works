'use strict';
var ctx, vcanvas;
var sx, sy;
var r_left, r_right, r_up, r_down;
var stype_hyj = 1; 
var fire_hyj;
var vel_hyj = 6;

var arrEnemy_hyj = [];

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function createEnemy_hyj() {
    var x_hyj, y_hyj, wh_hyj, c_hyj, v_hyj;

    wh_hyj = Math.floor(Math.random() * 31) + 15;
    x_hyj = 0 - wh_hyj;
    y_hyj = Math.floor(Math.random() * (vcanvas.height - wh_hyj));
    c_hyj = "#" + parseInt(Math.random()*0xffffff).toString(16);
    v_hyj = Math.floor(Math.random()*2)+1;

    arrEnemy_hyj.push({x : x_hyj, y: y_hyj, c: c_hyj, wh: wh_hyj, v: v_hyj});

}

function drawEnemy_hyj() {
    var i;
    for(i = 0; i < arrEnemy_hyj.length; i+=1){
        ctx.fillStyle = arrEnemy_hyj[i].c;
        ctx.fillRect(arrEnemy_hyj[i].x, arrEnemy_hyj[i].y, arrEnemy_hyj[i].wh, arrEnemy_hyj[i].wh);

        // ctx.fillStyle = "yellow";
        // ctx.font = "12px Arial";
        // ctx.fillText(i, arrEnemy_hyj[i].x+arrEnemy_hyj[i].wh*(40/100), arrEnemy_hyj[i].y+arrEnemy_hyj[i].wh*(60/100));
    
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
        if(arrEnemy_hyj[i].x > vcanvas.width) {
            arrEnemy_hyj.splice(i, 1);
        }    
    
    }
}

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
    ctx.fillText("Enemy: " + arrEnemy_hyj.length, 50, 50);
}

function gameLoop_hyj() {
    clearCanvas();

    drawEnemy_hyj();
    updateEnemy_hyj();
    deleteEnemy_hyj();

    drawShip_hyj();
    updateShip_hyj();

    info_hyj();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 700;
    sy = 200;

    setInterval(gameLoop_hyj, 33);
    setInterval(createEnemy_hyj, 1000);
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