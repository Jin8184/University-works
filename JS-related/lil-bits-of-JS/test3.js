/*
2022년 9월 13일 작성
console.log 학습
연산자 학습
\" 등 ㅌㄱ수문자
배열, 연산자
*/

// // console.log("hello world")
// console.log("2048099 홍예진")
// // console.log("전공: 드론?")

// console.log("안녕" + "하세요")
// console.log(5+6)
// console.log("5" + "6")
// console.log(10 % 5)

// console.log("안녕\n하세요")
// console.log("안녕\t하세요")
// console.log("안녕\'하세요\' ")
// console.log("안녕\"하세요\" ")
// console.log("안녕\\하세요\\ ")

// console.log("안녕하세요"[0])
// console.log("안녕하세요"[1])
// console.log("안녕하세요"[2])
// console.log("안녕하세요"[3])
// console.log("안녕하세요"[4])
// console.log("안녕하세요"[5])
// console.log("안녕하세요"[6])

// console.log(44==44)  //equel true
// console.log(44==22) //false
// console.log(22!=21)  //different
// console.log(22<33)
// console.log(!(22<33))
// console.log(33<22)
// console.log(!(33<22))
// console.log("==========")
// console.log(!false) //! is opposite or against or whatever...
// console.log(false)
// console.log(true)
// console.log(!true)

// let a = 5;
// console.log(a);

// let b = "안녕하세요";
// console.log(b);

// let c = (12>14);
// console.log(c);



// let hours = (new Date()).getHours();
// let mins = (new Date()).getMinutes();  //new는 새로운 값, Date는 메소드. 아무튼 위키 검색 요망
// let secs = (new Date()).getSeconds();
// let day = (new Date()).getDay();  //요일. sun = 0, tue = 2 etc...
// let f_year = (new Date()).getFullYear();
// let year = (new Date()).toLocaleDateFormat();  //toLocaleString같은걸로 바뀐듯

// console.log(hours+"시", ":", mins+"분", ":", secs+"초");

// console.log("+로 문장 연결");
// console.log("시간: "+ hours);
// console.log("분: "+ mins);
// console.log("초: "+ secs);

// console.log("\n,로 문장 연결");
// console.log("시간: ", hours);
// console.log("분: ", mins);
// console.log("초: ", secs);

// console.log(day)
// console.log(f_year)



// let pi = 3.14;
// let radius = 10;

// console.log("파이값:", pi);
// console.log("반지름 값:", radius);
// console.log("파이값:"+pi);
// console.log("반지름 값:"+radius);

// console.log("둘레:", 2*pi*radius);
// console.log("넓이:", pi*radius*radius);
// console.log("둘레:"+(2*pi*radius));
// console.log("넓이:"+(pi*radius*radius));



// let a = 2;
// a += 3;
// console.log(a);

// let a = "홍";
// a += "준";
// console.log(a);

//a++, a--로 증감 가능



// console.log(typeof(10))
// console.log(typeof("string"))

// let a = typeof(10)
// console.log(a)

// let b = typeof("str")
// console.log(b)

// let c = typeof(true)
// console.log(c)

// let d = typeof(function (){})
// console.log(d)



// ############################### IF ##############################


// let a = 1;

// if(a==1){
//     console.log("a is 1.")
// }   //false일 경우 그냥 패스함.

// let b = new Date().getDay();
// if(b == 2){
//     console.log("today is tuesday.")
// }

// let c = new Date().getDay();
// if(c == 3){
//     console.log("today is tuesday.")
// }

// let d = new Date().getHours();
// if(d <= 12){
//     console.log("Is AM.")
// }
// if(d > 12){
//     console.log("Is PM.")
// }
// if(d > 24){
//     console.log("WTF man")
// }

// let e = new Date().getMinutes();
// if(e == 36){
//     console.log("is 36min")
// }

// let a = 1;
// if(a == 1){
//     console.log("Is 1.")
// }else{
//     console.log("Is not 1.")
// }

// let b = 10;
// if(b%2 == 0){
//     console.log("b는 짝수입니다.")
// }else{
//     console.log("b는 홀수입니다.")
// }

// let a = new Date().getDay();
// if(a == 2){
//     console.log("오늘은 화요일입니다.")
// }else{
//     console.log("오늘은 화요일은 아닙니다.")
// }


// let date = new Date();
// let hours = date.getHours();

// if (hours < 11){
//     console.log("아침먹을 시간")
// } else if (hours < 15){
//     console.log("Lunch time!")
// } else{
//     console.log("Dinner time.")
// }



// let input1 = Math.random(); //0~1사이의 난수 변환
// let i = 1
// while(i<20){
//     let input1 = Math.random();
//     console.log(input1);
//     i += 1
// }
// let pie = Math.PI;
// console.log(pie);

// let zegop = Math.pow(2, 3);
// console.log(zegop);




// let aa = Math.random();
// let bb = aa * 10
// let cc = Math.floor(bb);
// console.log(aa);
// console.log(bb);
// console.log(cc);



// make time's RNG 1~10(multiply it and add 1 or somethin)
// 1~5 = low, else is high

// let aa = Math.random();
// let bb = aa * 10
// let cc = Math.floor(bb);  // 소수점 털어내기(int?)
// cc += 1;

// let abc = Math.floor(Math.random()*10) + 1;
// // abc = 11; //hehe partybomb

// if(abc >= 1 && abc <= 5){
//     console.log("Your RNG is LOW.");
// }else if(abc >= 5 && abc <= 10){
//     console.log("Your RNG is HIGH.");
// }else{
//     console.log("???");
// }
// console.log("RNG: ", abc);


// 홀짝

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




// // 가위바위보오오오오오오오오오오오오오오오오오오오오오오오오

// // make a random num and check if they are between 1~3
// // 1: sissors, 2: rock, 3: paper
// // 2 peoples. user1's RNG, user2's RNG
// // Didn't didn't it yeah


// let rand1 = Math.floor(Math.random()*10) + 1;
// let rand2 = Math.floor(Math.random()*10) + 1;

// // if((rand1 == 1) || (rand1 == 2) || (rand1 == 3)){
// //     user1 = rand1
// // }

// while((rand1 !=1) && (rand1 !=2) && (rand1 !=3) && (rand2 !=1) && (rand2 !=2) && (rand2 !=3)){
//     let rand1 = Math.floor(Math.random()*10) + 1;
//     let rand2 = Math.floor(Math.random()*10) + 1;
// }


// // if((rand2 == 1) || (rand2 == 2) || (rand2 == 3)){
// //     user2 = rand2
// // }

// console.log(user1)
// console.log(user2)


// let aa = Math.floor(Math.random()*10) + 1;
// let bb = Math.floor(Math.random()*10) + 1;

// console.log(aa, bb);

// if ((aa % 2 == 0) && (bb % 2 == 0))
// {
//     console.log("랜덤하게 생성된 숫자가 모두 짝수");
// }
// else if ((aa % 2 == 1) && (bb % 2 == 1))
// {
//     console.log("랜덤하게 생성된 숫자가 모두 홀수");
// }
// else
// {
//     console.log("랜덤하게 생성된 숫자가 홀/짝수");
// }


// let firs = Math.floor(Math.random()*10) + 1;
// let secc = Math.floor(Math.random()*10) + 1;

// console.log("\n첫번쨰: ", firs,"두번째: ", secc);

// if ((firs % 2 == 0) && (secc % 2 == 0))
// {
//     console.log("랜덤하게 생성된 숫자가 모두 짝수\n");
// }
// else if ((firs % 2 == 1) && (secc % 2 == 1))
// {
//     console.log("랜덤하게 생성된 숫자가 모두 홀수\n");
// }
// else if ((firs % 2 == 1) && (secc % 2 == 0))
// {
//     console.log("첫번째 숫자가 홀수, 두번째 숫자가 짝수\n");
// }
// else// if ((firs % 2 == 0) && (secc % 2 == 1))
// {
//     console.log("첫번째 숫자가 짝수, 두번째 숫자가 홀수\n");
// }
// // else
// // {
// //     console.log("?????\n");
// // }


// ##########################반복문부터 test4.js 파일로 이동#######################






