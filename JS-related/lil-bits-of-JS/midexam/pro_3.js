//for문 사용해서 1~ 10 사이의 랜덤 숫자를 10번 반복하는거 작성
// aa = Math.random()
// bb = aa * 10
// cc = Math.floor(bb)
// dd = cc+1

// console.log(dd)

for (i = 0; i<10; i++){
    aa = Math.random();
    bb = aa * 10;
    cc = Math.floor(bb);
    dd = cc+1;

    console.log(i+1,"번째 생성된 랜덤한 숫자:", dd);
}