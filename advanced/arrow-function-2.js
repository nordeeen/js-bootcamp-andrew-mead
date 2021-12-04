const add = function () {
  return arguments[0] + arguments[1];
};

const addNum = () => {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44)); // 33
console.log(addNum(11, 22, 33, 44)); // Error

//============//

// Arrow function tidak bisa menangkap target property object menggunakan keyword this

const car = {
  color: 'Red',
  getSummary: function () {
    return `the Car is ${this.color}`;
  },
};

// ubah seperti ini getSummary() maka solved
const myCar = {
  color: 'Blue',
  getSummary: () => {
    return `the Car is ${this.color}`;
  },
};

console.log(car.getSummary()); // the Car is Red
console.log(myCar.getSummary()); // the Car is undefined
