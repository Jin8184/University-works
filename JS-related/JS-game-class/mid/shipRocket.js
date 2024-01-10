"use strict";   // block the JS's flexability
var ctx, vcanvas;

var sx, sy;
var r_left, r_right, r_up, r_down;

var vel = 10;
var stype = 0;

var arrRocket = [];
var fire = 0;

var auto = 0;



function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}


function createRocket() {
    if (fire) {
        if(stype != 1) {
            arrRocket.push({x: sx+43, y: sy-2, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype === 1) {
            arrRocket.push({x: sx+43, y: sy+1, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket.push({x: sx+43, y: sy-5, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype > 1) {
            arrRocket.push({x: sx-20, y: sy-30, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket.push({x: sx-20, y: sy+26, rw: 5, rh: 4, c: "green", v: 13});
        }
        if(stype > 2) {
            arrRocket.push({x: sx-35, y: sy-35, rw: 5, rh: 4, c: "green", v: 13});
            arrRocket.push({x: sx-35, y: sy+31, rw: 5, rh: 4, c: "green", v: 13});
        }

    }
}

function drawRocket() {

    var i;
    for (i = 0; i < arrRocket.length; i += 1) {
        ctx.beginPath();
        ctx.fillStyle = arrRocket[i].c;
        ctx.fillRect(arrRocket[i].x, arrRocket[i].y, arrRocket[i].rw, arrRocket[i].rh);
    }
}

function updateRocket() {
    var i;
    for (i = 0; i < arrRocket.length; i += 1) {
        arrRocket[i].x += arrRocket[i].v;
    }
}

function deleteRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        if(arrRocket[i].x > vcanvas.width) {
            arrRocket.splice(i, 1);
        }
    }
}



function drawShip() {

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

    if(stype === 1) {
        ctx.beginPath();
        ctx.moveTo(sx-20, sy);
        ctx.fillStyle = "yellow";
        ctx.fillRect(sx+23, sy-6, 10, 12);
        // Lv 1
    }
    if(stype > 1) {

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
    if(stype > 2) {
        
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

function updateShip() {
    if(r_right) {sx += vel;}
    if(r_left) {sx -= vel;}
    if(r_down) {sy += vel;}
    if(r_up) {sy -= vel;}

    if(stype === 3) {
        if(sx > vcanvas.width - 43) {sx = vcanvas.width - 43;}
        if(sx < 57) {sx = 57;}
        if(sy > vcanvas.height - 34) {sy = vcanvas.height - 34;}
        if(sy < 34) {sy = 34;}

    }
    if(stype != 3) {
        if(sx > vcanvas.width - 43) {sx = vcanvas.width - 43;}
        if(sx < 57) {sx = 57;}
        if(sy > vcanvas.height - 30) {sy = vcanvas.height - 30;}
        if(sy < 30) {sy = 30;}
    }
}


/*
function drawDebug() {
    arrRocket.forEach(function(entry) {
        console.log(entry);
    })

    // console.log("count");
}
*/

function autoDebug() {
    if (auto && sy > vcanvas.height*(20/100)) {
        sy += vel;
    }
    if (auto && sy < vcanvas.height*(80/100)) {
        sy -= vel;
    }
}


function gameLoop() {
    clearCanvas();
    drawShip(); //전역변수는 파라메타 값 안줘도 됨
    updateShip();
    drawRocket();
    updateRocket();
    deleteRocket();
    // drawDebug();
}


function init(){
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 200;
    sy = 200;

    setInterval(createRocket, 100);
    setInterval(gameLoop, 33);
    // setInterval(autoDebug, 100);
}



function setkey(event) {   // the term 'event' is fixed in this class
    if(event.keyCode === 37){r_left = 1;}
    if(event.keyCode === 38){r_up = 1;}
    if(event.keyCode === 39){r_right = 1;}
    if(event.keyCode === 40){r_down = 1;}

    if(event.keyCode === 48){stype = 0;}
    if(event.keyCode === 49){stype = 1;}
    if(event.keyCode === 50){stype = 2;}
    if(event.keyCode === 51){stype = 3;}
    // ctx.fillText(event.keyCode, 50, 50);

    if(event.keyCode === 32){fire = 1;}

    if(event.keyCode === 65){auto = 1;} // a65, s83
    if(event.keyCode === 83){auto = 0;}
    // drawShip(sx, sy);
}

function stopkey(event) {
    if(event.keyCode === 37){r_left = 0;}
    if(event.keyCode === 38){r_up = 0;}
    if(event.keyCode === 39){r_right = 0;}
    if(event.keyCode === 40){r_down = 0;}

    if(event.keyCode === 32){fire = 0;}
}

document.onkeydown = setkey;
document.onkeyup = stopkey;    //when onkeyup, do this function.