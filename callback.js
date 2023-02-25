// function one(call_two) {
//   call_two();
//   console.log('step 1 ');
// }
// function two() {
//   console.log('step 2');
// }

// one(two);

let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);

  //call_production();
};

//callback hell
let production = () => {
  setTimeout(() => {
    console.log('production has started');

    setTimeout(() => {
      console.log('the fruits has been chopped');

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and  ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log('the machine was started');

          setTimeout(() => {
            console.log(`${stocks.holder[1]} was selected `);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log('served ice cream ');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(1, production);
