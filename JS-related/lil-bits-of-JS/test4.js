// 배열, 조건, 반복, 함수 네가지를 이해해야...




// for (let i = 0; i < 5; i++) // i는 index의 약자. 0번 1번 2번... i를 0으로 두는것도 비슷한 이유
// {
//     console.log("i:", (i+1)+"번째 출력")
// }
// console.log("\n############\n")
// for (let z = 10; z != 0; z--)
// {
//     console.log("z:", z)
// }

// let rann;
// // rann = Math.floor(Math.random()*10)+1

// for (let i = 0; i < 10; i++)
// {
//     console.log("=================")
//     rann = Math.floor(Math.random() * 10) + 1
//     console.log((i + 1) + "번째로 생성된 숫자:", rann)

//     if (rann % 2 == 0)
//     {
//         console.log("짝수입니다.")
//     }
//     else if (rann % 2 == 1)
//     {
//         console.log("홀수입니다.")
//     }
//     else
//     {
//         console.log("이상해요")
//     }

// }


// for (let i = 0; i < 10; i++) {
//     let firs = Math.floor(Math.random() * 10) + 1;
//     let secc = Math.floor(Math.random() * 10) + 1;

//     console.log("========" + (i + 1) + "번째 숫자 생성" + "========")
//     console.log("\n첫번쨰: ", firs, "두번째: ", secc);

//     if ((firs % 2 == 0) && (secc % 2 == 0)) {
//         console.log("둘 다 짝수입니다.\n");
//     }
//     else if ((firs % 2 == 1) && (secc % 2 == 1)) {
//         console.log("둘 다 홀수입니다.\n");
//     }
//     else if ((firs % 2 == 1) && (secc % 2 == 0)) {
//         console.log("첫번째 숫자가 홀수, 두번째 숫자가 짝수\n");
//     }
//     else {
//         console.log("첫번째 숫자가 짝수, 두번째 숫자가 홀수\n");
//     }
// }

// let i;
// let b = [7, 2, 3, 2, 4, "아침밥"];

// for (i = 5; i >= 0; i--) {
//     console.log(b[i])
// }

// b[0]=1000;
// console.log(b);

// b[3]=99;
// console.log(b);

// b[7]="저녁밥";
// console.log(b);

// b[6]="점심밥";
// console.log(b);




// for (let i = 0; i < 10; i++){
//     let secc = Math.floor(Math.random() * 10) + 1;
//     console.log(secc)
// }

// for (let i = 0; i<10; i++){
//     let rain = [0,1,2,3,4]
//     let rann = [Math.floor(Math.random() * 10)];
//     if(rann >= 0 && rann <= 6){
//         rain[rann] = 99;
//         console.log(rain,"\n");
//     }else{
//         console.log(rain,"\n");
//     }
// }



// for (let i = 0; i<10; i++){
//     let rain = [7,2,3,2,4,88];
//     let rann = [Math.floor(Math.random() * 10)];
//     if((rann < 7)){
//         rain[rann] = 99;
//         console.log("랜덤생성숫자:",rann);
//         console.log(rain,"\n");;
//     }else{
//         console.log("랜덤생성숫자:",rann);
//         console.log(rain,"\n");
//     }
// }

// let i = 0;
// let array = [0,1,2,3,4,34,325,6,246,67,624];
// let a_length = array.length;
// console.log("배열의 길이:",a_length);
// while(i < a_length){
//     console.log((i+1),"번째 출력:",array[i])
//     i++;
// }



// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }


let ar = [0, 1, 2, 3, 4, 5];
i = 0;
console.log("\nArr.langth:",ar.length,"\n");
while (i < ar.length) {
    aa = Math.random();
    bb = aa * 10;
    cc = Math.floor(bb);
    if (cc < ar.length) {
        console.log("랜덤 생성 인덱스:",cc);
        ar[cc] = 99;
        console.log("Changed array:",ar,"\n\n");
        // console.log(ar,"\n\n");
    }
    i++;
}
console.log("최종 배열:",ar,"\n");