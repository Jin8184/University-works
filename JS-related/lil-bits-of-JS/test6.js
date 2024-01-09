// 객체부터 시작

// let product = {
//     제품명: '건조 망고',
//     유형: '당절임',
//     성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
//     원산지: '필리핀'
// };
// console.log(product);

// console.log(product['제품명']); //객체 접근법 1
// console.log(product.원산지); //객체 접근법 2

// let obj = {
//     name: '바나나',
//     price: 3600
// };

// console.log(obj.name);
// console.log(obj.price);


// i = 1;
// let aa = 5;

// while(i<20){
//     if(i%aa==1 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else if(i%aa==2 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else if(i%aa==3 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else if(i%aa==4 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else if(i%aa==0 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else{
//         console.log(i,"의 나머지 값은 그 외 나머지 값이거나 aa보다 작습니다.");
//     }
//     i++;
// }


// i = 1;
// let aa = 3;

// while(i<50){
//     if(i%aa==0 && i>=aa){
//         console.log(i,"를",aa,"으로 나눈 나머지 값은",i%aa,"입니다.");
//     }else{}
//     i++;
// }

// i%aa>0 && i>=aa


// let i = 0;
// let array = [0,1,2,'asdf',3,4,5,6,"ㅁㄴㅇㄹ",8,8,09];
// while(i<array.length){
//     i++;
//     console.log(i-1,"번째 출력: ", array[i]);
// }

// let i;

// for (i=0; i<10; i++) {
//     aa = Math.random();
//     bb = aa * 10;
//     cc = Math.floor(bb);
//     rand = cc + 1;
//     console.log((i+1)+"번째 숫자 생성:", rand);
// }



// let aa = 22;
// let bb = aa % 2;

// let abc = Math.floor(Math.random()*10) + 1;
// let lol = abc % 2;
// console.log("RNG:", abc)

// switch(lol){
//     case 0:
//         console.log("랜덤하게 출력된 숫자는 짝수입니다.");
//         break;

//     case 1:
//         console.log("랜덤하게 출력된 숫자는 홀수입니다.");
//         break;

//     default:
//         console.log("???");
// }



// i = 1;
// hres = 0;
// zres = 0;
// while(i <= 10){
//     if(i%2==1){
//         hres += i;
//     }else if(i%2==0){
//         zres += i;
//     }
//     i++;
// }
// console.log("홀수의 합:", hres);
// console.log("짝수의 합:", zres);



// function jk_1(a,b){
//     return a+b
// }
// function jk_2(a,b){
//     return a*b
// }

// let aa = jk_1(2,3);
// let bb = jk_2(2,3);

// console.log("2와 3을 더한 값:", aa);
// console.log("2와 3을 곱한 값:", bb);
