/*
 Closure merupakan kombinasi antara function dan lingkungan leksikal  (lexical scope) di dalam function tersebut.

 Closure adalah sebuah kemampuan JavaScript dimana sebuah function dapat mengakses lexical scope walaupun function itu sendiri 
 di eksekusi di luar lexical scope. Closure tidak hanya dapat mengakses variable yang didekalasikan di dalam sebuah function scope, 
 namun juga termasuk setiap parameternya.

 Kenapa menggunakan Closure?

1. Untuk membuat Function Factories 
2. Untuk membuat private method

 */

//==========//

/*
const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Adder
const add = (a, b) => a + b;
const createAdder = a => {
  return b => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100);
console.log(add100(-90));

// Tipper

// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generates functions to calculate tips and print them

const createTipper = baseTip => {
  return amount => {
    return baseTip * amount;
  };
};

const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);
console.log(tip20(100));
console.log(tip30(100));



*/

//=============================//
// function init() {
//   //   let name = 'Jojo'; // local variable
//   // inner function (closure)
//   return function (name) {
//     console.log(name); // akses ke parent variable
//   };
// }

// let callName = init();
// callName('Budi');
// callName('Doremi');

//====================//
// Contoh Function Factories
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo selamat ${waktu}, bapak ${nama}`);
  };
}

// halo selamat pagi bapak edi.
let iniWaktu = ucapkanSalam('Pagi');
iniWaktu('Adi');
console.dir(iniWaktu);

//================//
// Contoh private method
// function add di bungkus oleh Imitdetly Invoke Function = ()();

let add = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.dir(add); // closurenya 3

//===============//

function sebuahFunction() {
  // kita mendeklarasikan variable di luar scope functionDiDalam
  let kelereng = 'kuning';

  function functionDiDalam() {
    // variable kelereng masih dapat kita akses di dalam function yang berbeda scope.
    // lexical scope yang memungkinkan kita untuk mengakses variable dengan nested function.
    console.log(kelereng);
  }

  return functionDiDalam;
}

const functionBaru = sebuahFunction(); // akan me-return function `functionDiDalam`

// dengan closure, walaupun kita memanggil `functionDiDalam` di luar scope function `sebuahFunction`
functionBaru(); // akan melakukan console.log('kuning')
console.dir(functionBaru);
