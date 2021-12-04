let num = 103.941;

console.log(num.toFixed(10)); // untuk membuat number menjadi beberapa digit.

console.log(Math.round(num)); // untuk membulatkan sebuah bilangan/number.
console.log(Math.floor(num)); // untuk membulatkan sebuah bilangan/number ke bawah.
console.log(Math.ceil(num)); // untuk membulatkan sebuah bilangan/number ke atas.
console.log(Math.random(num)); // untuk menghasilkan bilangan/number secara acak atau random.

let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 10 - 20
console.log(randomNum);

//========================//

// Challange Area
// 1 - 5 - true if correct - false if not correct

// Arrow Function
let makeGuess = guess => {
  let min = 1;
  let max = 5;

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNumber;
};

console.log(makeGuess(1));
