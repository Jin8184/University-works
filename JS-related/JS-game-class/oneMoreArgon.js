"use strict";
var vcanvas, ctx;
var sx, sy;
var stype = 0;
var r_down, r_left, r_right, r_up;
var fire = 0;
var arrRocket = [];
var arrEnemy = [];
var arrWall = [];

var shipCol = {x: sx - 55.5, y: sy - 27.5, w: 65, h: 55};

var vel = 10;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function b2v(a, b) { // create random numbers betweeeen a~b
    return a + Math.round((b - a) * Math.random());
}

//////////////////////////// COLLISION ///////////////////////
function hit_4to4(r1, r2) {
    var x0, x1, y0, y1, a0, a1, b0, b1;

    x0 = r1.x;
    x1 = r1.x + r1.w;
    y0 = r1.y;
    y1 = r1.y + r1.h;

    a0 = r2.x;
    a1 = r2.x + r2.w;
    b0 = r2.y;
    b1 = r2.y + r2.h;

    if(x0 < a1 && x1 > a0 && y0 < b1 && y1 > b0) {
        return true;
    } else { return false; }

    
}

function distance(x1, y1, x2, y2) {
    var dis;
    dis = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    return dis;
}

function hit_0to4(r1, r2) {//r1(cir): x, y, c, r, v   r2(sqe):x, y, c, wh, v
    var rResult = false;
    var rr, cc, x0, x1, y0, y1, ar;

    x0 = r2.x;
    x1 = r2.x + r2.w;
    y0 = r2.y;
    y1 = r2.y + r2.h;
  
    rr = {x0: x0, x1: x1, y0: y0, y1: y1};
    cc = {x: r1.x, y: r1.y, r: r1.r};

    ar = cc.r;

    if((cc.x > rr.x0 - cc.r) && (cc.x < rr.x1 + cc.r) && (cc.y > rr.y0 - cc.r) && (cc.y < rr.y1 + cc.r)) {
        rResult = true;   //in extended rectangle area

        if (cc.x < rr.x0) {   //rectangle's left extended area
            if (cc.y < rr.y0) { //rec's left top area
                if (distance(rr.x0, rr.y0, cc.x, cc.y) >= ar * ar) {
                    rResult = false;    //if won't really colide
                }
            } else {     //rec's left bottom area
                if(cc.y > rr.y1) {
                    if (distance(rr.x0, rr.y1, cc.x, cc.y) >= ar * ar) {
                        rResult = false;
                    }
                }
            }
        } else {    //if cc.x is bigger than rr.x0(left to infinity)
            if (cc.x > rr.x1) {   //rec's right extended area
                if (cc.y < rr.y0) { //rec's right top area
                    if (distance(rr.x1, rr.y0, cc.x, cc.y) >= ar * ar) {
                        rResult = false;
                    }
                } else {
                    if (cc.y > rr.y1) {   //rec's right bott area
                        if (distance(rr.x1, rr.y1, cc.x, cc.y) >= ar * ar) {
                        rResult = false;
                        }
                    }
                }
            }
        }
    }
}

function collisionEnemy() {
    var i, eni; //ship = ship, eni = enemy

    ctx.strokeStyle = "green";    //quick ship collision
    ctx.strokeRect(shipCol.x, shipCol.y, shipCol.w, shipCol.h);
    ctx.lineWidth = 3;

    for(i = 0; i < arrEnemy.length; i += 1) {
        eni = {x: arrEnemy[i].x, y: arrEnemy[i].y, r: arrEnemy[i].r};
        if(hit_0to4(eni, shipCol)) {
            arrEnemy.splice(i, 1);
            console.log("why did u kill me");
        }
    }
}

function collisionWall() {
    var i, r1, r2; //r1 = ship, r2 = wall
    r1 = shipCol;
    for(i = 0; i < arrWall.length; i += 1) {
        r2 = {x: arrWall[i].x, y: arrWall[i].y, w: arrWall[i].wh, h: arrWall[i].wh};
        if(hit_4to4(r1, r2)) {
            arrWall.splice(i, 1);
        }
    }
}

function collisionRocket(r1) {
    var i, r2, r3;
    for(i = 0; i < arrWall.length; i += 1) {
        r2 = {x: arrWall[i].x, y: arrWall[i].y, w: arrWall[i].wh, h: arrWall[i].wh};
        if(hit_4to4(r1, r2)) {
            arrWall[i].hit += 1;
        }
        if(arrWall[i].hit > 20) {
            arrWall.splice(i, 1);
        }
    }
    for(i = 0; i < arrEnemy.length; i += 1) {
        r2 = {x: arrEnemy[i].x, y: arrEnemy[i].y, w: arrEnemy[i].wh, h: arrEnemy[i].wh};
        if(hit_0to4(r1, r2)) {
            arrEnemy[i].hit += 1;
        }
        if(arrEnemy[i].hit > 20) {
            arrEnemy.splice(i, 1);
        }
    }
}



/////////////////////////// ENEMY //////////////////////////////
function createEnemy() {
    /*
    var x, y, wh, c, v;

    wh = Math.floor(Math.random() * 31) + 10;
    x = vcanvas.width;
    y = Math.floor(Math.random() * (vcanvas.height - wh));
    c = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);
    v = Math.floor(Math.random() * 2) + 1;

    arrEnemy.push({x: x, y: y, c: c, wh: wh, v: v, hit: 0});
*/
    var x, y, r, c, v;

    r = Math.floor(Math.random() * 16) + 5;
    x = vcanvas.width + r;
    y = Math.floor(Math.random() * (vcanvas.height - r * 2)) + r;
    c = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);
    v = Math.floor(Math.random() * 2) + 1;

    arrEnemy.push({x: x, y: y, c: c, r: r, v: v, hit: 0});
}

function drawEnemy() {
    /*var i;
    for(i = 0; i < arrEnemy.length; i += 1) {
        ctx.fillStyle = arrEnemy[i].c;
        ctx.fillRect(arrEnemy[i].x, arrEnemy[i].y, arrEnemy[i].wh, arrEnemy[i].wh);
    }*/
    var i;
    for(i = 0; i < arrEnemy.length; i+=1){
        ctx.fillStyle = arrEnemy[i].c;
        ctx.beginPath();
        ctx.arc(arrEnemy[i].x, arrEnemy[i].y, arrEnemy[i].r, 0, 2*Math.PI, true);
        ctx.fill();
        }
}

function updateEnemy() {
    var i;
    for(i = 0; i < arrEnemy.length; i += 1) {
        arrEnemy[i].x -= arrEnemy[i].v;
    }

}

function deleteEnemy() {
    var i;
    for(i = 0; i < arrEnemy.length; i += 1) {
        if(arrEnemy[i].x + arrEnemy[i].wh < 0) {
            arrEnemy.splice(i, 1);
        }
    }

}

/////////////////////////// WALL //////////////////////////////
function createWall() {
    var x, y, wh, c, v, cnt;

    wh = b2v(10, 40);
    x = vcanvas.width;
    c = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);
    y = 5;
    v = Math.floor(Math.random() * 2) + 1;

    for(cnt = 0; cnt * wh < vcanvas.height; cnt += 1) {
        arrWall.push({x: x, y: y, c: c, wh: wh, v: v, hit: 0});
        y += wh + 5;
    }
}

function drawWall() {
    var i;
    for(i = 0; i < arrWall.length; i += 1) {
        ctx.fillStyle = arrWall[i].c;
        ctx.fillRect(arrWall[i].x, arrWall[i].y, arrWall[i].wh, arrWall[i].wh);

    }
}

function updateWall() {
    var i;
    for(i = 0; i < arrWall.length; i += 1) {
        arrWall[i].x -= arrWall[i].v;
    }
}

function deleteWall() {
    var i;
    for(i = 0; i < arrWall.length; i += 1) {
        if(arrWall[i].x + arrWall[i].wh < 0) {
            arrWall.splice(i, 1);
        }
    }
}

/////////////////////////// ROCKET //////////////////////////////
function createRocket() {
    if (fire) {
        if(stype != 1) {
            arrRocket.push({x: sx+43, y: sy-2, w: 5, h: 4, c: "green", v: 13});
        }
        if(stype === 1) {
            arrRocket.push({x: sx+43, y: sy+1, w: 5, h: 4, c: "green", v: 13});
            arrRocket.push({x: sx+43, y: sy-5, w: 5, h: 4, c: "green", v: 13});
        }
        if(stype > 1) {
            arrRocket.push({x: sx-20, y: sy-30, w: 5, h: 4, c: "green", v: 13});
            arrRocket.push({x: sx-20, y: sy+26, w: 5, h: 4, c: "green", v: 13});
        }
        if(stype > 2) {
            arrRocket.push({x: sx-35, y: sy-35, w: 5, h: 4, c: "green", v: 13});
            arrRocket.push({x: sx-35, y: sy+31, w: 5, h: 4, c: "green", v: 13});
        }

    }
}

function drawRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        ctx.beginPath();
        ctx.fillStyle = arrRocket[i].c;
        ctx.fillRect(arrRocket[i].x, arrRocket[i].y, arrRocket[i].w, arrRocket[i].h);

    }
}

function updateRocket() {
    var i;
    for(i = 0; i < arrRocket.length; i += 1) {
        arrRocket[i].x += arrRocket[i].v;
        collisionRocket(arrRocket[i]);
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

//////////////////////////// SHIP ///////////////////////////////
function drawShip() {

    ctx.beginPath();
    ctx.moveTo(sx-30, sy-30);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.fillRect(sx-57, sy-30, 57, 60);
    ctx.strokeRect(sx-57, sy-30, 57, 60);

    //// MAKE IT ROUND ////
    ctx.moveTo(sx, sy);
    ctx.beginPath();
    ctx.arc(sx, sy, 30, 0, 2*Math.PI, true);
    ctx.stroke();
    ctx.fill();
    ///////////////////////

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

//////////////////////////// MAIN ////////////////////////////
function info() {
    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText(
        "stype: " +
        stype +
        "   Rocket: " +
        arrRocket.length +
        "   Enemy: " +
        arrEnemy.length, 50, 50);
}

function gameLoop() {
    clearCanvas();

    drawRocket();
    updateRocket();
    deleteRocket();

    drawWall();
    updateWall();
    deleteWall();

    drawEnemy();
    updateEnemy();
    deleteEnemy();

    drawShip();
    updateShip();

    collisionEnemy();
    collisionWall();

    info();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    sx = 200;
    sy = 200;

    setInterval(gameLoop, 33);
    setInterval(createRocket, 100);
    setInterval(createEnemy, 400);
    setInterval(createWall, 5000);
}

function set_key(event) {
    if(event.keyCode === 37){r_left = 1;}
    if(event.keyCode === 38){r_up = 1;}
    if(event.keyCode === 39){r_right = 1;}
    if(event.keyCode === 40){r_down = 1;}

    if(event.keyCode === 48){stype = 0;}
    if(event.keyCode === 49){stype = 1;}
    if(event.keyCode === 50){stype = 2;}
    if(event.keyCode === 51){stype = 3;}

    if(event.keyCode === 32){fire = 1;}
}

function stop_key(event) {
    if(event.keyCode === 37){r_left = 0;}
    if(event.keyCode === 38){r_up = 0;}
    if(event.keyCode === 39){r_right = 0;}
    if(event.keyCode === 40){r_down = 0;}

    if(event.keyCode === 32){fire = 0;}
}

document.onkeydown = set_key;
document.onkeyup = stop_key;