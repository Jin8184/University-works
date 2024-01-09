//while문을 사용하여 1부터 10까지 숫자들 중에서 홀수의 합과 짝수의 합을 계산하고 출력하는 코드 작성
//while, if, % 사용하기

// arr = [1,2,3,4,5,6,7,8,9,10];
// i = 0;
// hol = 0;
// zz = 0;
// while(i < 10){
//     if(arr[i]%2==1){
//         hol += arr[i];
//         i++;
//     }else if(arr[i]%2==0){
//         zz += arr[i];
//         i++;
//     }
// }
// console.log("홀수의 합:", hol);
// console.log("짝수의 합:", zz);

arr = [1,2,3,4,5,6,7,8,9,10];
i = 0;
hol = 0;
zz = 0;
while(i < 10){
    if(arr[i]%2==1){
        hol += arr[i];
        i++;
    }else if(arr[i]%2==0){
        zz += arr[i];
        i++;
    }
}
console.log("홀수의 합:", hol);
console.log("짝수의 합:", zz);
