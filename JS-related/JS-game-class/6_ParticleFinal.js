"use strict";
var ctx, vcanvas;

var sp, left, up, right, down;
var rect = [];
var particle = [];

var k = 5;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}



function b2v(a, b) {
    //between 2 vectors(or variables) to calcuate the random number between 2 nums.
    return a + (b-a) * Math.random(); //a is smaller
}

function createParticle(a) {
    var nop; //Number of pieces
    nop = 200;
    var i, x, y, wh, colors, d1, d2, velx, vely;
    //limit the particle spawn in to rect's size,pw = 1~10 random

    //particle = [];


    for(i = 0; i < nop; i += 1) {
        wh = b2v(1, 10);
        x = a.x + b2v(0, a.w * 1.2);
        y = a.y + b2v(0, a.h * 1.2);
        colors = a.c + Math.round(60 * Math.random());
        d1 = b2v(30, 120);
        d2 = b2v(30, 120);
        velx = (7 - wh) / 3 * b2v(-1, 1);
        vely = (7 - wh) / 3 * b2v(-1, 1);

        particle.push({px: x, py: y, pw: wh, pc: colors, d1: d1, d2: d2, vx: velx, vy: vely});
    }


}

function drawParticle() {
    var i, lightness; //지역변수 선언도 var로 가능
    for (i = 0; i < particle.length; i += 1) {
        lightness = 70 * particle[i].d1 / particle[i].d2; //if d2 is bigger, fading is quicker
        
        ctx.fillStyle = "hsl(" + particle[i].pc + ", 100%, " + lightness + "%)";
        ctx.fillRect(particle[i].px, particle[i].py, particle[i].pw, particle[i].pw);
    }
}

function updateParticle() {
    var i;
    for (i = 0; i < particle.length; i += 1) {
        particle[i].d1 -= k*2;
        particle[i].px -= k*particle[i].vx;
        particle[i].py -= k*particle[i].vy;
    }
}

function deleteParticle() {
    var i;
    for (i = 0; i < particle.length; i += 1) {
        if (particle[i].d1<= -10) {
            //검어도 좀 더 날라가게 0이 아니라 -10으로 해둠
            particle.splice(i, 1);
            // console.log("aaaaa");
        }
        // console.log("i'm alive");
    }
}



function createBlock() {
    var c, i;
    rect = [];
    for(i = 0; i < 4; i+= 1) {
        c = Math.round(360*Math.random());
        rect.push({x: 100 + 200*i, y: 200, w: 100, h: 100, c: c, state: 1});
        // console.log("creating...");
    }

}

function drawBlock() {
    var hue, saturation, lightness, i;

    saturation = 100;
    lightness = 50;

    for (i = 0; i < rect.length; i+=1) {
        if (rect[i].state == 1) {
            hue = rect[i].c;
            ctx.fillStyle = "hsl("+hue+","+saturation+"%,"+lightness+"%)";
            ctx.fillRect(rect[i].x, rect[i].y, rect[i].w, rect[i].h);
        }
    }
}


function gameLoop() {
    clearCanvas();

    if(sp) {
        createBlock();
    }
    if(left && rect[0].state == 1) {createParticle(rect[0]);
        rect[0].state = 0;}
    if(up && rect[1].state == 1) {createParticle(rect[1]);
        rect[1].state = 0;}
    if(right && rect[2].state == 1) {createParticle(rect[2]);
        rect[2].state = 0;}
    if(down && rect[3].state == 1) {createParticle(rect[3]);
        rect[3].state = 0;}

    drawBlock();
    drawParticle();

    updateParticle();
    deleteParticle();
}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    createBlock();
    setInterval(gameLoop, 33);

}



function set_key(event) {
    if (event.keyCode === 32){sp = 1;}

    if (event.keyCode === 39){left = 1;}
    if (event.keyCode === 38){up = 1;}
    if (event.keyCode === 37){right = 1;}
    if (event.keyCode === 40){down = 1;}
}

function stop_key(event) {
    if (event.keyCode === 32){sp = 0;}

    if (event.keyCode === 39){left = 0;}
    if (event.keyCode === 38){up = 0;}
    if (event.keyCode === 37){right = 0;}
    if (event.keyCode === 40){down = 0;}
}

document.onkeydown = set_key;
document.onkeyup = stop_key;