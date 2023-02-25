
//check prime number 

const prompt = require('prompt-sync')();

var number = prompt("Enter a number:");

let isPrime = true;

if(number===1){
    console.log("1 is neither prime nor composite");
}
else if( number > 1){
    for(let i=2 ; i < number ; i++ ){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is a prime number`);
    }else{
        console.log(`${number} is not a prime number`);
    }
}
else{
    console.log("not a prime number");
}