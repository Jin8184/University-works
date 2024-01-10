var vcanvas, ctx;

function init() {
    vcanvas = document.getElementById("myCanvas");
    ctx = vcanvas.getContext("2d");

    //head
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arc(200, 200, 100, 0, 2*Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //eyes
    ctx.beginPath();
    ctx.moveTo(275, 175);
    ctx.arc(250, 175, 25, 0, 1*Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(175, 175);
    ctx.arc(150, 175, 25, 0, 1*Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //chomper
    ctx.beginPath();
    ctx.moveTo(230, 225);
    ctx.arc(200, 225, 30, 0, 1*Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
}