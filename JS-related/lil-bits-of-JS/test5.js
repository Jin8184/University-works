// 함수부터 시작
/*
function park(a) {
    let zz;
    zz = a * a;
    console.log(zz);
    // return zz; park가 알아서 출력. 값만 입력하면 됨
}
let jj;
jj = park(2)
// console.log(jj);
*/

// function sum(min,max){
//     let output = 0;
//     let i;

//     for(i = min; i <= max; i++){
//         output+=i; //output = i + output
//     }
//     return output;
// }

// let result;
// result = sum(3,6);
// console.log(result);




// function sum(min,max){
//     let output = 0;
//     let i;

//     for(i = min; i <= max; i++){
//         output+=array[i]; //output = i + output
//     }
//     return output;
// }

// let result;
// let array = [23, 35, 2, 43, 2, 3, 4444];
// result = sum(2,5,array);
// console.log(result);


//인덱스가 홀수일때만 덧셈하기
// function sum(min, max) {
//     let output = 0;
//     let i;

//     for (i = min; i <= max; i++) {
//         if (i % 2 == 1) {
//             output += array[i]; //output = i + output
//         }
//     }
//     return output;
// }

// let result;
// let array = [23, 35, 2, 43, 2, 3, 4444];
// result = sum(1,5,array);
// console.log(result);


//1부터 10까지 랜덤 숫자를 생성하고
//랜덤한 숫자가 홀수면 홀수 인덱스의 누적 합 계산
//랜덤한 숫자가 짝수면 짝수 인덱스의 누적 합 계산

// aa = Math.random();
// bb = aa * 10;
// cc = Math.floor(bb);
// dd = cc + 1;

function sum(min, max) {
    let output = 0;
    let i;
    let rand;

    aa = Math.random();
    bb = aa * 10;
    cc = Math.floor(bb);
    rand = cc + 1;

    console.log("랜덤: ",rand);

    for (i = 0; i < array.length; i++) {
        if (rand % 2 == 1 && i % 2 == 1) {
            output += array[i];
        }else if (rand % 2 == 0 && i % 2 == 0) {
            output += array[i];
        }
        // if((i%2)==(rand%2)){
        //     output += array[i];
        // }
    }
    return output;
}

let result;
let array = [23, 35, 2, 43, 2, 3, 4444];
result = sum(1,5,array);
console.log("결과: ", result);

//배열 만들시는 랜덤 숫자 만들 때 0이 있어야 함.
//홀짝 가릴시는 +1로 0을 없애야 함.