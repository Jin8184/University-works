"use strict";
var vcanvas, ctx;
var sx, sy;
var r_left, r_right, r_up, r_down;
var vel = 5;
var stype = 0;
var fire = 0;
var arrRocket = [];
var arrEnemy = [];
var arrWall_hyj = [];
var myAudio;
var deathAudio;

function clearCanvas() {
  ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function hit_4to4(r1, r2) { //r1, r2 : struct{x, y, w, h}
  var x0, x1, y0, y1, a0, a1, b0, b1;
  x0 = r1.x;
  x1 = r1.x+r1.w;
  y0 = r1.y;
  y1 = r1.y+r1.h;

  a0 = r2.x;
  a1 = r2.x+r2.w;
  b0 = r2.y;
  b1 = r2.y+r2.h;

  if(x0 < a1 && x1 > a0 && y0 < b1 && y1 > b0) {
    return true;
  } else { return false; }
}


function collisionEnemy() { //colShip으로 사용하심
  var i, r1, r2;
  r1 = {x: sx - 10, y: sy - 10, w: 50, h: 20};
  for(i = 0; i < arrEnemy.length; i += 1) {
    r2 = {x: arrEnemy[i].x, y: arrEnemy[i].y, w: arrEnemy[i].wh, h: arrEnemy[i].wh};
    if(hit_4to4(r1, r2)) {
      arrEnemy.splice(i, 1);
      deathAudio = new Audio("sound/C.mp3");
      deathAudio.volume = 1;
      deathAudio.play();
    }
  }
}

function collisionWall() {
    var i, r1, r2;
    r1 = {x: sx - 10, y: sy - 10, w: 50, h: 20};
    for(i = 0; i < arrWall_hyj.length; i += 1) {
      r2 = {x: arrWall_hyj[i].x, y: arrWall_hyj[i].y, w: arrWall_hyj[i].wh, h: arrWall_hyj[i].wh};
      if(hit_4to4(r1, r2)) {
        arrWall_hyj.splice(i, 1);
        deathAudio = new Audio("sound/C.mp3");
        deathAudio.volume = 1;
        deathAudio.play();
      }
    }
  }

function collisionRocket(r1) { // 로켓 하나하나당 콜되기 때문에 r1... 로켓 정보가 r1으로 들어옴
  var i, r2, r3;
  for(i = 0; i < arrEnemy.length; i += 1) {
    r2 = {x: arrEnemy[i].x, y: arrEnemy[i].y, w: arrEnemy[i].wh, h: arrEnemy[i].wh};
    if(hit_4to4(r1, r2)) {
      arrEnemy[i].hit += 1;
    }
    if(arrEnemy[i].hit > 20) {
      arrEnemy.splice(i, 1);
    }
  }
  for(i = 0; i < arrWall_hyj.length; i += 1) {
    r3 = {x: arrWall_hyj[i].x, y: arrWall_hyj[i].y, w: arrWall_hyj[i].wh, h: arrWall_hyj[i].wh};
    if(hit_4to4(r1, r3)) {
      arrWall_hyj[i].hit += 1;
    }
    if(arrWall_hyj[i].hit > 20) {
      arrWall_hyj.splice(i, 1);
    }
  }
}

function destroyRocket(r1) {
    var i, j, r2, r3;


    for(i = 0; i < arrEnemy.length; i+=1) {
        r2 = {x: arrEnemy[i].x, y: arrEnemy[i].y, w: arrEnemy[i].wh, h: arrEnemy[i].wh};
        if(hit_4to4(r1, r2)) {
            arrRocket.splice(i, 1);
        }
    }
//     for(j = 0; arrWall_hyj.length; j+=1) {
//         r3 = {x: arrWall_hyj[j].x, y: arrWall_hyj[j].y, w: arrWall_hyj[j].wh, h: arrWall_hyj[j].wh};
//         if(hit_4to4(r1, r3)) {
//             arrRocket.splice(i, 1);
//         }
//     }
}

function createWall_hyj() {
    var x_hyj, y_hyj, wh_hyj, c_hyj, v_hyj, count_hyj;

    wh_hyj = Math.floor(Math.random() * 31) + 10;
    x_hyj = vcanvas.width;
    c_hyj = "#" + parseInt(Math.random()*0xffffff).toString(16);
    y_hyj = 5;
    v_hyj = Math.floor(Math.random()*2)+1;

    for(count_hyj = 0; count_hyj*wh_hyj < vcanvas.height; count_hyj+=1){
        arrWall_hyj.push({x : x_hyj, y: y_hyj, c: c_hyj, wh: wh_hyj, v: v_hyj, hit: 0});
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
        arrWall_hyj[i].x -= arrWall_hyj[i].v;
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
function createEnemy() {
  var x, y, wh, c, v;

  x = vcanvas.width;
  y = Math.floor(Math.random() * vcanvas.height);
  wh = Math.floor(Math.random() * 31) + 10;
  v = Math.floor(Math.random() * 2) + 1;
  c = "#" + parseInt(Math.random() * 0xffffff, 10).toString(16);

  if (y > wh && y < vcanvas.height - wh) {
    arrEnemy.push({ x: x, y: y, wh: wh, v: v, c: c, hit: 0 });
  }
}


function updateEnemy() {
  var i;
  for (i = 0; i < arrEnemy.length; i += 1) {
    arrEnemy[i].x -= arrEnemy[i].v;

  }
}

function deleteEnemy() {
  var i;
  for (i = 0; i < arrEnemy.length; i += 1) {
    if (arrEnemy[i].x + arrEnemy[i].wh < 0) {
      arrEnemy.splice(i, 1);
    }
  }
}

function drawEnemy() {
  var i;
  for (i = 0; i < arrEnemy.length; i += 1) {
    ctx.fillStyle = arrEnemy[i].c;
    ctx.fillRect(arrEnemy[i].x, arrEnemy[i].y, arrEnemy[i].wh, arrEnemy[i].wh);
  }
}

// Rocket
function createRocket() {
  if (fire) {
    if (stype !== 1) {
      arrRocket.push({ x: sx + 60, y: sy - 2, w: 5, h: 4, v: 8, c: "yellow" });
    }
    if (stype === 1) {
      arrRocket.push({ x: sx + 55, y: sy - 5, w: 5, h: 4, v: 8, c: "yellow" });
      arrRocket.push({ x: sx + 55, y: sy + 1, w: 5, h: 4, v: 8, c: "yellow" });
    }
    if (stype > 1) {
      arrRocket.push({ x: sx + 20, y: sy - 15, w: 5, h: 4, v: 8, c: "yellow" });
      arrRocket.push({ x: sx + 20, y: sy + 11, w: 5, h: 4, v: 8, c: "yellow" });
    }
    if (stype > 2) {
      arrRocket.push({ x: sx + 10, y: sy - 19, w: 5, h: 4, v: 8, c: "yellow" });
      arrRocket.push({ x: sx + 10, y: sy + 15, w: 5, h: 4, v: 8, c: "yellow" });
    }
    if(stype !== 1){ myAudio = new Audio("sound/Gun_1p.mp3");}
    if(stype === 1){ myAudio = new Audio("sound/Gun_2p.mp3");}
    if(stype > 1){ myAudio = new Audio("sound/Gun_3p.mp3");}
    if(stype > 2){ myAudio = new Audio("sound/Gun_4p.mp3");}
    myAudio.volume = 0.1;
    myAudio.play();
  }
}

function updateRocket() {
  var i;
  for (i = 0; i < arrRocket.length; i += 1) {
    arrRocket[i].x += arrRocket[i].v;
    collisionRocket(arrRocket[i]);
    destroyRocket(arrRocket[i]);
  }
}

function deleteRocket() {
  var i;
  for (i = 0; i < arrRocket.length; i += 1) {
    if (arrRocket[i].x > vcanvas.width) {
      arrRocket.splice(i, 1);
    }
  }
}

function drawRocket() {
  var i;
  for (i = 0; i < arrRocket.length; i += 1) {
    ctx.fillStyle = arrRocket[i].c;
    ctx.fillRect(
      arrRocket[i].x,
      arrRocket[i].y,
      arrRocket[i].w,
      arrRocket[i].h
    );
  }
}

// Ship
function updateShip() {
  var h = 15;
  if (r_left) {
    sx -= vel;
  }
  if (r_right) {
    sx += vel;
  }
  if (r_up) {
    sy -= vel;
  }
  if (r_down) {
    sy += vel;
  }

  // 보정
  if (sx - 15 < 0) {
    sx = 15;
  }
  if (sx + 60 > vcanvas.width) {
    sx = vcanvas.width - 60;
  }
  if (stype > 2) {
    h = 19;
  }
  if (sy - h < 0) {
    sy = h;
  }
  if (sy + h > vcanvas.height) {
    sy = vcanvas.height - h;
  }
}

function drawShip() {
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.moveTo(sx - 15, sy);
  ctx.lineTo(sx, sy - 15);
  ctx.lineTo(sx + 60, sy);
  ctx.lineTo(sx, sy + 15);
  ctx.lineTo(sx - 15, sy);
  ctx.fill();

  if (stype === 1) {
    ctx.fillRect(sx + 42, sy - 5, 10, 10);
  }
  if (stype > 1) {
    ctx.fillRect(sx + 10, sy - 15, 10, 30);
  }
  if (stype > 2) {
    ctx.fillRect(sx, sy - 19, 10, 38);
  }

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.strokeRect(sx-10, sy-10, 50, 20);
}

function stateInfo() {
  ctx.fillStyle = "white";
  ctx.font = "15pt Georgia";
  ctx.fillText(
    "Stype: " +
      stype +
      "   Enemy: " +
      arrEnemy.length +
      "   Rocket: " +
      arrRocket.length,
    10,
    20
  );
}

function gameLoop() {
  clearCanvas();

  updateRocket();
  deleteRocket();
  drawRocket();

  drawWall_hyj();
  updateWall_hyj();
  deleteWall_hyj();

  updateEnemy();
  deleteEnemy();
  drawEnemy();

  updateShip();
  drawShip();

  collisionEnemy();
  collisionWall();

  stateInfo();
}

function init() {
  vcanvas = document.getElementById("myCanvas");
  ctx = vcanvas.getContext("2d");

  sx = 200;
  sy = 200;

  setInterval(createEnemy, 90);
  setInterval(createRocket, 90);
  setInterval(gameLoop, 30);
  setInterval(createWall_hyj, 3000);
}

// key control
function set_key(event) {
  if (event.keyCode === 37) {
    r_left = 1;
  }
  if (event.keyCode === 38) {
    r_up = 1;
  }
  if (event.keyCode === 39) {
    r_right = 1;
  }
  if (event.keyCode === 40) {
    r_down = 1;
  }

  if (event.keyCode === 48) {
    stype = 0;
  }
  if (event.keyCode === 49) {
    stype = 1;
  }
  if (event.keyCode === 50) {
    stype = 2;
  }
  if (event.keyCode === 51) {
    stype = 3;
  }

  if (event.keyCode === 32) {
    fire = 1;
  }
}

function stop_key(event) {
  if (event.keyCode === 37) {
    r_left = 0;
  }
  if (event.keyCode === 38) {
    r_up = 0;
  }
  if (event.keyCode === 39) {
    r_right = 0;
  }
  if (event.keyCode === 40) {
    r_down = 0;
  }

  if (event.keyCode === 32) {
    fire = 0;
  }
}

document.onkeydown = set_key;
document.onkeyup = stop_key;
