"use strict";
var vcanvas, ctx;
var F, Fs, G, Gs, A, As, B, C, Cs, D, Ds, E, hF = 0;
var press = 0;
var myAudio = new Audio();

function clearCanvas() {ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);}


function title() {
    if(press)
    {
        ctx.fillStyle = "lightcyan";
        ctx.fillRect(0, 0, vcanvas.width, vcanvas.height);
    }

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    if(F == 1){ctx.fillStyle = "red";}
    if(Fs == 1){ctx.fillStyle = "chocolate";}
    if(G == 1){ctx.fillStyle = "orange";}
    if(Gs == 1){ctx.fillStyle = "gold";}
    if(A == 1){ctx.fillStyle = "yellow";}
    if(As == 1){ctx.fillStyle = "greenyellow";}
    if(B == 1){ctx.fillStyle = "green";}
    if(C == 1){ctx.fillStyle = "skyblue";}
    if(Cs == 1){ctx.fillStyle = "cornflowerblue";}
    if(D == 1){ctx.fillStyle = "blue";}
    if(Ds == 1){ctx.fillStyle = "blueviolet";}
    if(E == 1){ctx.fillStyle = "purple";}
    if(hF == 1){ctx.fillStyle = "hotpink";}


    ctx.fillText("My Dingus Piano", 220, 80);
}

function drawPianoWhite() {
    ctx.fillStyle = "snow";
    ctx.fillRect(100, 100, 400, 200);
    ctx.strokeStyle = "black";
    ctx.strokeRect(100, 100, 50, 200);
    ctx.strokeRect(150, 100, 50, 200);
    ctx.strokeRect(200, 100, 50, 200);
    ctx.strokeRect(250, 100, 50, 200);
    ctx.strokeRect(300, 100, 50, 200);
    ctx.strokeRect(350, 100, 50, 200);
    ctx.strokeRect(400, 100, 50, 200);
    ctx.strokeRect(450, 100, 50, 200);
}

function playWhite() {
    ctx.fillStyle = "yellow";
    if(F == 1)
    {
        ctx.fillRect(100, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/F.mp3");
        myAudio.play();
    }
    if(G == 1)
    {
        ctx.fillRect(150, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/G.mp3");
        myAudio.play();
    }
    if(A == 1)
    {
        ctx.fillRect(200, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/A.mp3");
        myAudio.play();
    }
    if(B == 1)
    {
        ctx.fillRect(250, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/B.mp3");
        myAudio.play();
    }
    if(C == 1)
    {
        ctx.fillRect(300, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/C.mp3");
        myAudio.play();
    }
    if(D == 1)
    {
        ctx.fillRect(350, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/D.mp3");
        myAudio.play();
    }
    if(E == 1)
    {
        ctx.fillRect(400, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/E.mp3");
        myAudio.play();
    }
    if(hF == 1)
    {
        ctx.fillRect(450, 100, 50, 200);
        var myAudio = new Audio("24-piano-keys/hF.mp3");
        myAudio.play();
    }

    
}

function drawPianoBlack() {
    ctx.fillStyle = "black";
    ctx.fillRect(135, 100, 30, 130);
    ctx.fillRect(185, 100, 30, 130);
    ctx.fillRect(235, 100, 30, 130);

    ctx.fillRect(335, 100, 30, 130);
    ctx.fillRect(385, 100, 30, 130);

}

function playBlack() {
    ctx.fillStyle = "yellow";
    if(Fs == 1)
    {
        ctx.fillRect(135, 100, 30, 130);
        var myAudio = new Audio("24-piano-keys/Fs.mp3");
        myAudio.play();
    }
    if(Gs == 1)
    {
        ctx.fillRect(185, 100, 30, 130);
        var myAudio = new Audio("24-piano-keys/Gs.mp3");
        myAudio.play();
    }
    if(As == 1)
    {
        ctx.fillRect(235, 100, 30, 130);
        var myAudio = new Audio("24-piano-keys/As.mp3");
        myAudio.play();
    }

    if(Cs == 1)
    {
        ctx.fillRect(335, 100, 30, 130);
        var myAudio = new Audio("24-piano-keys/Cs.mp3");
        myAudio.play();
    }
    if(Ds == 1)
    {
        ctx.fillRect(385, 100, 30, 130);
        var myAudio = new Audio("24-piano-keys/Ds.mp3");
        myAudio.play();
    }
}

function instruction() {
    ctx.fillStyle = "steelblue";
    ctx.font = "20px Arial";
    ctx.fillText("Z", 120, 290);
    ctx.fillText("X", 170, 290);
    ctx.fillText("C", 220, 290);
    ctx.fillText("V", 270, 290);
    ctx.fillText("B", 320, 290);
    ctx.fillText("N", 370, 290);
    ctx.fillText("M", 420, 290);
    ctx.fillText(",", 470, 290);

    ctx.fillText("S", 144, 220);
    ctx.fillText("D", 194, 220);
    ctx.fillText("F", 244, 220);
    ctx.fillText("H", 344, 220);
    ctx.fillText("J", 394, 220);
}


function gameLoop() {
    clearCanvas();

    title();
    drawPianoWhite();
    playWhite();
    drawPianoBlack();
    playBlack();

    instruction();

}

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    setInterval(gameLoop, 30);
}

function set_key(event) {
    if (event.keyCode === 90){ F = 1;}
    if (event.keyCode === 88){ G = 1;}
    if (event.keyCode === 67){ A = 1;}
    if (event.keyCode === 86){ B = 1;}
    if (event.keyCode === 66){ C = 1;}
    if (event.keyCode === 78){ D = 1;}
    if (event.keyCode === 77){ E = 1;}
    if (event.keyCode === 188){ hF = 1;}

    if (event.keyCode === 83){ Fs = 1;}
    if (event.keyCode === 68){ Gs = 1;}
    if (event.keyCode === 70){ As = 1;}

    if (event.keyCode === 72){ Cs = 1;}
    if (event.keyCode === 74){ Ds = 1;}
    press = 1;

}
function stop_key(event) {    
    if (event.keyCode === 90){ F = 0;}
    if (event.keyCode === 88){ G = 0;}
    if (event.keyCode === 67){ A = 0;}
    if (event.keyCode === 86){ B = 0;}
    if (event.keyCode === 66){ C = 0;}
    if (event.keyCode === 78){ D = 0;}
    if (event.keyCode === 77){ E = 0;}
    if (event.keyCode === 188){ hF = 0;}

    if (event.keyCode === 83){ Fs = 0;}
    if (event.keyCode === 68){ Gs = 0;}
    if (event.keyCode === 70){ As = 0;}

    if (event.keyCode === 72){ Cs = 0;}
    if (event.keyCode === 74){ Ds = 0;}
    press = 0;
}
document.onkeydown = set_key;
document.onkeyup = stop_key;