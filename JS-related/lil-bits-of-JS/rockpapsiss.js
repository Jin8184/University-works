// 가위바위보오오오오오오오오오오오오오오오오오오오오오오오오

// make a random num and check if they are between 1~3
// 1: sissors, 2: rock, 3: paper
// 2 peoples. user1's RNG, user2's RNG
// Didn't didn't it yeah

// if((rand1 == 1) || (rand1 == 2) || (rand1 == 3)){
//     user1 = rand1
// }

// while((rand1 !=1) && (rand1 !=2) && (rand1 !=3) && (rand2 !=1) && (rand2 !=2) && (rand2 !=3)){
//     let rand1 = Math.floor(Math.random()*10) + 1;
//     let rand2 = Math.floor(Math.random()*10) + 1;
// }

// if((rand2 == 1) || (rand2 == 2) || (rand2 == 3)){
//     user2 = rand2
// }

// console.log(user1)
// console.log(user2)


// for (i = 0; i<20; i++){

//     let user1 = Math.floor(Math.random()*3) + 1;
//     let user2 = Math.floor(Math.random()*3) + 1;

//     console.log(i+1+"번째 게임 결과!")
//     if(user1 == 1){
//         console.log("\'User1\'이 가위를 냈습니다!");
//     }else if(user1 == 2){
//         console.log("\'User1\'이 바위를 냈습니다!");
//     }else if(user1 == 3){
//         console.log("\'User1\'이 보!!를 냈습니다!");
//     }else{
//         console.log("\'User1\'이 이상합니다!");
//     }

//     if(user2 == 1){
//         console.log("\'User2\'가 가위를 냈습니다!");
//     }else if(user2 == 2){
//         console.log("\'User2\'가 바위를 냈습니다!");
//     }else if(user2 == 3){
//         console.log("\'User2\'가 보!!를 냈습니다!");
//     }else{
//         console.log("\'User2\'가 이상합니다!");
//     }

//     if(user1 == user2){
//         console.log("비겼습니다!");
//     }else if((user1 == 1 && user2 == 3) || (user1 == 3 && user2 == 2) || (user1 == 2 && user2 == 1)){
//         console.log("\'User1\'이 이겼습니다!");
//     }else if((user2 == 1 && user1 == 3) || (user2 == 3 && user1 == 2) || (user2 == 2 && user1 == 1)){
//         console.log("\'User2\'가 이겼습니다!");
//     }else{
//         console.log("\n음...\n")
//     }
//     console.log("======================================")
// }




function rps(a){
    if (a == 1){
        return "가위";
    }else if(a == 2){
        return "바위";
    }else{
        return "보";
    }
}

for (i=0;i<20;i++){

    console.log(i+1+"번째 게임 결과!")

    let user1 = Math.floor(Math.random()*3) + 1;
    let user2 = Math.floor(Math.random()*3) + 1;

    console.log("유저1은 "+rps(user1)+"를 냈습니다.");
    console.log("유저2는 "+rps(user2)+"를 냈습니다.");

    if(user1==user2){
        console.log("이 게임은 비겼습니다.");
    }else if((user1 == 1 && user2 == 3) || (user1 == 3 && user2 == 2) || (user1 == 2 && user2 == 1)){
        console.log("유저1이 승리했습니다.");
    }else{
        console.log("유저2가 승리했습니다.");
    }
    console.log("======================================")

}