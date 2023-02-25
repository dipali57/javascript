//accept number from user


const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
  console.log(`Oh, so your name is ${answer}`);
  console.log("Closing the interface");
  rl.close();
});
/////////////////////////////////////////////////