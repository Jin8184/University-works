var vcanvas, ctx;

function drawHG(x, y, fillCol, lineCol) { 

    ctx.beginPath(); //도형 시작시마다 해주기
    ctx.moveTo(x, y); //시작점 이동
    ctx.lineTo(x+100, y); //선 그리기
    ctx.lineTo(x, y+100);
    ctx.lineTo(x+100, y+100);
    ctx.closePath(); //시작점까지 닫기
    ctx.strokeStyle = lineCol; //스트로크 색
    ctx.stroke(); //그리기
    ctx.fillStyle = fillCol; //색칠 색
    ctx.fill(); //칠하기

    // console.log("sucsess");

}

function drawRec(x, y, w, h, fillCol, lineCol) {   

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = lineCol;
    ctx.strokeRect(x, y, w, h); //이것만 스트로크를 해주지 않아도 된느 예외가 있음
    // ctx.stroke();
    ctx.fillStyle = fillCol;
    ctx.fill();

}

function drawArc(x, y, r, fillCol, lineCol) {   

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x+50, y+0, r, 0, 2*Math.PI, true);
    ctx.lineWidth = 10;
    ctx.strokeStyle = lineCol;
    ctx.stroke();
    ctx.fillStyle = fillCol;
    ctx.fill();

}


function init() {

    vcanvas = document.getElementById("myCanvas"); //myCanvas 인식 후 JS로 가져오기
    ctx = vcanvas.getContext("2d"); //컨텍스트 가져와서 기능 추가(2d)

    drawHG(50, 50, "black", "black");
    drawHG(250, 250, "grey", "grey");
    drawRec(50, 250, 100, 100, "white", "rgb(0, 170, 0)");
    drawArc(250, 100, 50, "blue", "yellow");
    
}
