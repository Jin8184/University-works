var vcanvas, ctx;
var sx, sy, sp; // sp = spacebar
var stype = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, vcanvas.width, vcanvas.height);
}

function gameLoop() {
    clearCanvas();
    drawShip(sx, sy);
    // gridDraw();
    drawBullet(sx, sy);
}

function drawShip(sx, sy) {

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

function drawBullet(sx, sy) {

    if (sp) {

        if(stype != 1) {
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx+45, sy, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill();
        }
    
        if(stype === 1){
            // Lv 1
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx+45, sy+3, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // lower
    
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx+45, sy-3, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // upper
    
            
        }
        if(stype > 1){
            // Lv 2
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx-18, sy-28, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // upper
    
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx+-18, sy+28, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // lower
        }
        if(stype > 2){
            // Lv 3
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx-33, sy-32, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // u
    
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.arc(sx-33, sy+32, 2, 0, 2*Math.PI, true);
            ctx.fillStyle = "green";
            ctx.fill(); // l
        }

    }

}

function gridDraw() {
    ctx.strokeStyle = "green";
    ctx.moveTo(0, 0);
    ctx.strokeRect(0, 0, vcanvas.width/2, vcanvas.height/2);
    ctx.moveTo(vcanvas.width/2, vcanvas.height/2);
    ctx.strokeRect(vcanvas.width/2, vcanvas.height/2, vcanvas.width, vcanvas.height);
}



function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    // ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);
    
    sx = 200;
    sy = 200;
    sp = 0;

    setInterval(gameLoop, 33);

}




function setkey(event) {   // the term 'event' is fixed in this class
    if(event.keyCode === 48){stype = 0;}
    if(event.keyCode === 49){stype = 1;}
    if(event.keyCode === 50){stype = 2;}
    if(event.keyCode === 51){stype = 3;}

    if(event.keyCode === 32){sp = 1;}

    // drawShip(sx, sy);
}
function stopkey(event) {
    if(event.keyCode === 32){sp = 0;}
}


document.onkeydown = setkey;
document.onkeyup = stopkey;
