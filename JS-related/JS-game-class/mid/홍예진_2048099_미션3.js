var vcanvas, ctx;

function taegeuk(x, y, r) {

    //blue side
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, 0, 1 * Math.PI);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    //red side
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, r, 0, 1 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    //bluesmol
    ctx.beginPath();
    ctx.moveTo(x+r/2, y);
    ctx.arc(x+r/2, y, r / 2, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();

    //redsmol
    ctx.beginPath();
    ctx.moveTo(x-r/2, y);
    ctx.arc(x-r/2, y, r / 2, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();    

}



function init() {

    vcanvas = document.getElementById("myCanvas"); //myCanvas 인식 후 JS로 가져오기
    ctx = vcanvas.getContext("2d"); //컨텍스트 가져와서 기능 추가(2d)

    // taegeuk(100, 200, 100);

    ctx.save();
    ctx.translate(200, 200); //캔버스 원점 이동
    ctx.rotate(0.3); //회전(라디안 사용)
    taegeuk(0, 0, 100); //draw
    ctx.restore();
}