'use strict';
var vcanvas, ctx;
var rt = {x: 200, y: 150, w: 200, h: 100};
var cm = {x: 500, y: 50, r: 50, v: 5};

var r_down, r_left, r_right, r_up;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function drawRT() {
    if(hit()) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(rt.x, rt.y, rt.w, rt.h);
    }
    ctx.strokeStyle = "green";
    ctx.strokeRect(rt.x-50, rt.y-50, cm.r, cm.r);
    ctx.strokeRect(rt.x+rt.w, rt.y-50, cm.r, cm.r);
    ctx.strokeRect(rt.x-50, rt.y+rt.h, cm.r, cm.r);
    ctx.strokeRect(rt.x+rt.w, rt.y+rt.h, cm.r, cm.r);
    ctx.strokeRect(rt.x-50, rt.y-50, rt.w+100, rt.h+100);

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.strokeRect(rt.x, rt.y, rt.w, rt.h);
    ctx.fillText("(x0, y0)", rt.x - 30, rt.y - 5);
    ctx.fillText("(x1, y0)", rt.x + 180, rt.y - 5);
    ctx.fillText("(x0, y1)", rt.x - 30, rt.y + 115);
    ctx.fillText("(x1, y1)", rt.x + 180, rt.y + 115);
}

function drawCM() {
    ctx.beginPath();
    ctx.arc(cm.x, cm.y, cm.r, 0, Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cm.x, cm.y, 2, 0, Math.PI*2);
    ctx.fill();

    //text
    ctx.fillText("(cm.x, cm.y)", cm.x + 10, cm.y + 5);

}

function moveCM() {
    if (r_down){cm.y += cm.v;}
    if (r_left){cm.x -= cm.v;}
    if (r_right){cm.x += cm.v;}
    if (r_up){cm.y -= cm.v;}

}

function info() {
    /*var rr, cc, x0, x1, y0, y1;
  
    x0 = rt.x;
    x1 = rt.x + rt.wh;
    y0 = rt.y;
    y1 = rt.y + rt.wh;
  
    rr = {x0: x0, x1: x1, y0: y0, y1: y1};
    cc = {x: cm.x, y: cm.y, r: cm.r};*/
  

    if(hit()) {
        ctx.fillText("상태: 충돌",50, 50);
    } else {
        ctx.fillText("상태: 미충돌",50, 50);
    }

}

function hit() {    //rt, cm
    var result = false;
    var ar;
    /*var dx00, dy00, dist00, dx01, dy01, dist01, dx10, dy10, dist10;
    dx00 = rt.x-cm.x;
    dy00 = rt.y-cm.y;
    dist00 = Math.sqrt(dx00*dx00+dy00*dy00);*/
    

    if(rt.x-50 < cm.x && rt.x+rt.w+50 > cm.x && rt.y-50 < cm.y && rt.y+rt.h+50 > cm.y) {//bigrec
        result = true;
        ar = cm.r;
        if(cm.x < rt.x0) {//circle w corners Left
            
        }
        
        return result;
    } else {return result;}

    /*var rResult = false, ar;

    if((cc.x > rr.x0 - cc.r) && (cc.x < rr.x1 + cc.r) && (cc.y > rr.y0 - cc.r) && (cc.y < rr.y1 + cc.r)) {
      rResult = true;
      ar = cc.r;
      if (cc.x < rr.x0) {
        if (cc.y < rr.y0) {
          if (distance(rr.x0, rr.y0, cc.x, cc.y) >= ar * ar) {
            rResult = false;
          }
        }else { 
          if ((distance(rr.x0, rr.y1, cc.x, cc.y) >= ar*ar)) {
            rResult = false;
          }
        }
      }
    } else {
      if (cc.x > rr.x1) {
        if (cc.y < rr.y0) {
          if (distance(rr.x1, rr.y0, cc.x, cc.y) >= ar*ar) {
            rResult = false;
          }
        } else {
          if (cc.y > rr.y1) {
            if (distance(rr.x1, rr.y1, cc.x, cc.y) >= ar*ar) {
              rResult = false;
            }
          }
        }
      }
    }*/
}


function gameLoop() {
    clearCanvas();

    drawRT();
    moveCM();
    drawCM();


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