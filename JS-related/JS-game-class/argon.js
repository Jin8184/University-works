"use strict";   // block the JS's flexability
var ctx, vcanvas;
var sx, sy;
var r_left, r_right, r_up, r_down;

var vel = 10;
var stype_v16 = 0;

var arrRocket_v16 = [];
var fire_v16 = 0;

var arrEnemy_v16 = [];

///////////////////////////// ENEMY
function clearCanvas_v16() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function createEnemy_v16() {
    var x_v16, y_v16, wh_v16, c_v16, v_v16; //local variable

    wh_v16 = Math.floor(Math.random() * 31) + 10;   //10~40
    // x_v16 = Math.floor(Math.random() * (vcanvas.width - (wh_v16)));
    x_v16 = vcanvas.width;
    y_v16 = Math.floor(Math.random() * (vcanvas.height - (wh_v16)));
    c_v16 = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);

    v_v16 = Math.floor(Math.random() * 2) + 1;  // 1or2

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



//////////////////////////////////// ROCKET
function createRocket_v16() {
    if (fire_v16) {
        if(stype_v16 != 1) {
            arrRocket_v16.push({x: sx+43, y: sy-2, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype_v16 === 1) {
            arrRocket_v16.push({x: sx+43, y: sy+1, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket_v16.push({x: sx+43, y: sy-5, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype_v16 > 1) {
            arrRocket_v16.push({x: sx-20, y: sy-30, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket_v16.push({x: sx-20, y: sy+26, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype_v16 > 2) {
            arrRocket_v16.push({x: sx-35, y: sy-35, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket_v16.push({x: sx-35, y: sy+31, rw: 5, rh: 4, c: "green", v: 13});
        }

    }
}

function drawRocket_v16() {

    var i;
    for (i = 0; i < arrRocket_v16.length; i += 1) {
        ctx.beginPath();
        ctx.fillStyle = arrRocket_v16[i].c;
        ctx.fillRect(arrRocket_v16[i].x, arrRocket_v16[i].y, arrRocket_v16[i].rw, arrRocket_v16[i].rh);
    }
}

function updateRocket_v16() {
    var i;
    for (i = 0; i < arrRocket_v16.length; i += 1) {
        arrRocket_v16[i].x += arrRocket_v16[i].v;
    }
}

function deleteRocket_v16() {
    var i;
    for(i = 0; i < arrRocket_v16.length; i += 1) {
        if(arrRocket_v16[i].x > vcanvas.width) {
            arrRocket_v16.splice(i, 1);
        }
    }
}


//////////////////////////////////// SHIP
function drawShip_v16() {

    // ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(sx-30, sy-30);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fillRect(sx-57, sy-30, 57, 60);
    ctx.strokeRect(sx-57, sy-30, 57, 60);

    ///////// MAKE IT ROUND //////////
    ctx.moveTo(sx, sy);
    ctx.beginPath();
    ctx.arc(sx, sy, 30, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.fill();
    ////////////////////

    ctx.beginPath();
    ctx.moveTo(sx-20, sy);
    ctx.fillStyle = "yellow";
    ctx.fillRect(sx+23, sy-3, 20, 6);

    ctx.beginPath();
    ctx.moveTo(sx+23, sy);
    ctx.arc(sx, sy, 23, 0, 2*Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();

    if(stype_v16 === 1) {
        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx+23, sy-6, 10, 12);
        // Lv 1
    }
    if(stype_v16 > 1) {

        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx-35, sy+24, 15, 6);

        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx-35, sy-30, 15, 6);
        // Lv 2
    }
    if(stype_v16 > 2) {
        
        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx-50, sy-34, 15, 10);

        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx-50, sy+24, 15, 10);
    }
}

function updateShip_v16() {
    if(r_right) {sx += vel;}
    if(r_left) {sx -= vel;}
    if(r_down) {sy += vel;}
    if(r_up) {sy -= vel;}

    if(stype_v16 === 3) {
        if(sx > vcanvas.width - 43) {sx = vcanvas.width - 43;}
        if(sx < 57) {sx = 57;}
        if(sy > vcanvas.height - 34) {sy = vcanvas.height - 34;}
        if(sy < 34) {sy = 34;}

    }
    if(stype_v16 != 3) {
        if(sx > vcanvas.width - 43) {sx = vcanvas.width - 43;}
        if(sx < 57) {sx = 57;}
        if(sy > vcanvas.height - 30) {sy = vcanvas.height - 30;}
        if(sy < 30) {sy = 30;}
    }
}


//////////////////////////////////// GAME
function gameLoop_v16() {
    clearCanvas_v16();

    drawShip_v16(); //전역변수는 파라메타 값 안줘도 됨
    updateShip_v16();

    drawRocket_v16();
    updateRocket_v16();
    deleteRocket_v16();

    drawEnemy_v16();
    updateEnemy_v16();
    deleteEnemy_v16();
}


function init(){
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 200;
    sy = 200;

    setInterval(createRocket_v16, 100);
    setInterval(createEnemy_v16, 400);
    setInterval(gameLoop_v16, 33);
}


//////////////////////////////////// KEY
function setkey(event) {   // the term 'event' is fixed in this class
    if(event.keyCode === 37){r_left = 1;}
    if(event.keyCode === 38){r_up = 1;}
    if(event.keyCode === 39){r_right = 1;}
    if(event.keyCode === 40){r_down = 1;}

    if(event.keyCode === 48){stype_v16 = 0;}
    if(event.keyCode === 49){stype_v16 = 1;}
    if(event.keyCode === 50){stype_v16 = 2;}
    if(event.keyCode === 51){stype_v16 = 3;}

    if(event.keyCode === 32){fire_v16 = 1;}

}

function stopkey(event) {
    if(event.keyCode === 37){r_left = 0;}
    if(event.keyCode === 38){r_up = 0;}
    if(event.keyCode === 39){r_right = 0;}
    if(event.keyCode === 40){r_down = 0;}

    if(event.keyCode === 32){fire_v16 = 0;}
}

document.onkeydown = setkey;
document.onkeyup = stopkey;    //when onkeyup, do this function.