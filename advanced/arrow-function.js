// shorthand Arrow Function
const square = num => num * num;

const squareLong = num => {
  return num * num;
};

console.log(square(7));
console.log(squareLong(5));

const people = [
  {
    name: 'Adi',
    age: 27,
  },
  {
    name: 'Edi',
    age: 31,
  },
  {
    name: 'Fajar',
    age: 22,
  },
];

// const under30 = people.filter(function (person) {
//   return person.age > 17;
// });

// Shorthand
const under30 = people.filter(person => person.age < 31);
console.log(under30);

// 1. Find the person with age 22
// 2. Print that persons name
const findAge = people.find(person => person.age === 22);
console.log(findAge);
