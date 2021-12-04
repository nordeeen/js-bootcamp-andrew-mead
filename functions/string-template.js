// Example 1
let name = 'Andrew';
let age = 24;

console.log(`Hello, my name is ${name}, my age ${age} years old `);

// Example 2
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Nama : ${name} and Score : ${score}`;
};

let scoreText = getScoreText('Andrew', 100);
console.log(scoreText);

// Example 3
let city = 'DKI Jakarta';
let country = 'Indonesia';
let location = `${city}, ${country}`;

console.log(location);

// Challange Area
// A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

let Tip = getTip(40, 0.25);
console.log(Tip);
