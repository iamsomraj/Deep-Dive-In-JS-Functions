const pureFucntion = () => {
  console.log('Pure function is a function which produces same output');
  console.log('based on the same input and ');
  console.log('it does not change anything outside the function');
  console.log('The example of above is ');
  console.log('Simple add function producing the addition result');
  console.log(`
    function add(numberOne , numberTwo) {
      return numberOne+numberTwo;
    }

  `);

  function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
  }
  let sum = add(10, 12);
  console.log(sum);
  console.log('\n\n\n');
};

const impureFunction = () => {
  console.log('Impure functions are the functions that have side effects');
  console.log('The function produces random output');
  console.log('It also changes something outside the local scope');
  console.log(`
    let numbers = [];
    function addRandom() {
      numbers.push(Math.random() * 10);
      console.log(numbers);    
    }   
  `);

  let numbers = [];
  function addRandom() {
    numbers.push(Math.random() * 10);
    console.log(numbers);
  }

  addRandom();
  console.log('\n\n\n');
};

const factoryFunction = () => {
  console.log(
    'Factory functions are normal functions that can be configured early'
  );
  console.log('We can pass an arguemnt earlier via the outer function');
  console.log('We can then invoke the inner function from its reference');
  console.log('Example of the factory  function ');
  console.log(`
    function calculateTax(taxPercentage) {
      function returnTaxAmount(amount, taxPercentage) {
        return amount * taxPercentage;
      }
      return returnTaxAmount;
    }

    let cgst = calculateTax(0.25);
    let sgst = calculateTax(0.20);
    console.log(cgst(10000));
    console.log((sgst(20000)));    
  `);

  function calculateTax(taxPercentage) {
    function returnTaxAmount(amount) {
      return amount * taxPercentage;
    }
    return returnTaxAmount;
  }

  let cgst = calculateTax(+0.25);
  let sgst = calculateTax(+0.2);
  console.log(cgst(10000));
  console.log(sgst(20000));
  console.log('\n\n\n');
};

const closures = () => {
  console.log('All the functions in the javascript are basically closures');
  console.log('These functions always remembers the surrounding enviroment');
  console.log('it can also be said that functions close over those variables');
  console.log('It actually stores the acces not the value');
  console.log('Example of the functions or closures : ');
  console.log(`
    
  
  let userName = 'Somraj';
  function fun() {
    console.log('Hello ' + userName + ' ! ');
  }
  userName = 'Rubal';
  fun();
  
  `);

  let userName = 'Somraj';
  function fun() {
    console.log('Hello ' + userName + ' ! ');
  }
  userName = 'Rubal';
  fun();
  console.log('\n\n\n');
};

const recursion = () => {
  console.log(
    'The function which calls itself and has a terminating condition'
  );
  console.log('These functions are actually heavy on the memory');
  console.log('The functions on the other hand are fast');
  console.log('The example of the above the recursion :');
  console.log(`
  

  function power(number, exponent) {
    if (exponent === 1) {
      return number;
    }
    return number * power(number, exponent - 1);
  }

  let powerResult = power(12, 2);
  console.log(powerResult);
  
  `);

  function power(number, exponent) {
    if (exponent === 1) {
      return number;
    }
    return number * power(number, exponent - 1);
  }

  let powerResult = power(12, 2);
  console.log(powerResult);
  console.log('\n\n\n');
};

pureFucntion();
impureFunction();
factoryFunction();
closures();
recursion();
