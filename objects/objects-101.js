let myBook = {
  title: '1968',
  author: 'George Orwell',
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

// change pageCount
myBook.pageCount = 400;
console.log(`${myBook.title} by ${myBook.author} and ${myBook.pageCount} page`);

// Challange Area
// name, age, location
// Andrew is 27 and lives in Philadelphia
// increase age by 1 and print message again

let userData = {
  name: 'Jo',
  age: 17,
  location: 'Bangkok',
};

console.log(
  `${userData.name} is ${userData.age} years old and lives in ${userData.location}.`
);

// increase age by 1
userData.age = userData.age + 1;

console.log(
  `${userData.name} is ${userData.age} years old and lives in ${userData.location}.`
);
