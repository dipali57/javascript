/*
premises : when you have to handle more than one 
asynchronous task one after another
*/

const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve('There is a count value.');
  } else {
    reject('There is no count value');
  }
});

console.log(countValue);

//chaining the promise with then()

let countValue1 = new Promise(function (resolve, reject) {
  resolve('promise resolved');
});

countValue1
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue2() {
    console.log('you can call multiple function');
  });
