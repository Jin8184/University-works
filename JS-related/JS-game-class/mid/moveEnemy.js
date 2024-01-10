"use strict";
var vcanvas, ctx;
// var enemy_v16 = {x: null, y: null, c: null, wh: null, v: null}; // wh=widHeight
var arrEnemy_v16 = [];

var sp = 0;

function clearCanvas_v16() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

//Enemy
function createEnemy_v16() {
    var x_v16, y_v16, wh_v16, c_v16, v_v16; //local variable

    wh_v16 = Math.floor(Math.random() * 31) + 10;   //10~40
    // x_v16 = Math.floor(Math.random() * (vcanvas.width - (wh_v16)));
    x_v16 = vcanvas.width;
    y_v16 = Math.floor(Math.random() * (vcanvas.height - (wh_v16)));
    c_v16 = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);

    v_v16 = Math.floor(Math.random() * 2) + 5;  // 1or2

    arrEnemy_v16.push({x: x_v16, y: y_v16, c: c_v16, wh: wh_v16, v: v_v16});

    // enemy_v16 = {x: x_v16, y: y_v16, c: c_v16, wh: wh_v16, v: v_v16};

}

function drawEnemy_v16() {
    // ctx.fillStyle = enemy_v16.c;
    // ctx.fillRect(enemy_v16.x, enemy_v16.y, enemy_v16.wh, enemy_v16.wh);
    var i;
    for(i = 0; i < arrEnemy_v16.length; i += 1 ) {
        ctx.fillStyle = arrEnemy_v16[i].c;
        ctx.fillRect(arrEnemy_v16[i].x, arrEnemy_v16[i].y, arrEnemy_v16[i].wh, arrEnemy_v16[i].wh);

        // ctx.fillStyle = "yellow";
        // ctx.fillText(i, arrEnemy_v16[i].x+arrEnemy_v16[i].wh*(40/100), arrEnemy_v16[i].y+arrEnemy_v16[i].wh*(60/100));
    }
}

function updateEnemy_v16() {
    // enemy_v16.x -= enemy_v16.v;
    var i;
    for(i = 0; i < arrEnemy_v16.length; i += 1) {
        arrEnemy_v16[i].x -= arrEnemy_v16[i].v;
    }
}

function deleteEnemy_v16() {
    var i;
    for(i = 0; i < arrEnemy_v16.length; i += 1) {
        // if(arrEnemy_v16.length > 20) {
        //     arrEnemy_v16.splice(0, 1);
        // }
        if(arrEnemy_v16[i].x + arrEnemy_v16[i].wh < 0) {
            arrEnemy_v16.splice(i, 1);
        }
    }
}

//      ONLY 4 TEST!!!!!
function drawEnemyCount_v16() {
    ctx.fillStyle = "red";
    ctx.fillText("Enemy count: " + arrEnemy_v16.length, 20, 20);
}


//Game
function gameLoop_v16() {
    clearCanvas_v16();
    // if(sp) {createEnemy_v16();}
    drawEnemy_v16();
    updateEnemy_v16();
    deleteEnemy_v16();

    drawEnemyCount_v16();
}

function init()
{
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    setInterval(createEnemy_v16, 400);
    setInterval(gameLoop_v16, 100);

}

function setkey(event) {
    if(event.keyCode === 32){sp = 1;}
    // ctx.fillStyle = "red";
    // ctx.fillText(event.keyCode, 50, 50);
}

function stopkey(event) {
    if(event.keyCode === 32){sp = 0;}
}

document.onkeydown = setkey;
document.onkeyup = stopkey;