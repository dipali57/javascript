let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject));
}

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('which toping would you love? '));
    }, 3000);
  });
};
async function kitchen() {
  console.log('A');
  console.log('B');
  await toppings_choice();
  console.log('C');
  console.log('D');
  console.log('E');
}

kitchen();
console.log('Cleaning the dishes ');
console.log('cleaning the tables ');
console.log('Taking orders');

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log('abc doesnt exit');
//   } finally {
//     console.log('runs code anyways');
//   }
// }
// //order();
// order().then(() => {
//   console.log('Then handler');
// });
