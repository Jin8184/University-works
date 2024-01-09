//배열 없이


i = 1;
hres = 0;
zres = 0;
while(i <= 10){
    if(i%2==1){
        hres += i;
    }else if(i%2==0){
        zres += i;
    }
    i++;
}
console.log("홀수의 합:", hres);
console.log("짝수의 합:", zres);