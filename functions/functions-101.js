// Function - input (argument), code, output(return value)

let getUser = function () {
  console.log('hello welcome');
};

getUser();
getUser();
getUser();

// ==================== //
let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);
console.log(value);
console.log(otherValue);

// ================ //
// Challange Area

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let dataTempOne = convertFahrenheitToCelsius(32);
let dataTempTwo = convertFahrenheitToCelsius(50);
console.log(dataTempOne);
console.log(dataTempTwo);
