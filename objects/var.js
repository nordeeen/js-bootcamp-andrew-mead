// var tidak memiliki konsistensi dalam menetapkan variable.
var firstName = 'Jo';
firstName = 'Jeje';

var firstName = 'Joey';

console.log(firstName); // Joey

// var tidak menerapkan block scope
if (10 === 10) {
  var otherName = 'Juan';
}

console.log(otherName);

// var bisa di hoisting (ditarik ke atas)
// let dan const tidak bisa di hoisting

myAge = 22;
console.log(myAge);
var myAge;
