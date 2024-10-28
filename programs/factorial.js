const findFactorial = (num) => {
    let sum=1;
    for(let i=0;i<=num;i++){
        if(num > 0){
        sum = sum * num;
        }
        num--;
    }
    return sum;
};

const findFactorial2 = (num) => {
    if(num==0 || num==1){
        return 1;
    }
    return num * findFactorial2(num-1);
}

//console.log(findFactorial(0));
console.log(findFactorial2(10));