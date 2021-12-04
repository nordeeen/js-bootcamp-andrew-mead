// Multiple Arguments
let add = function (a, b, c) {
  return a + b + c;
};

let getAdd = add(10, 5, 1);
console.log(getAdd);

// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Nama : ${name} == Score :  ${score}`;
};

let scoreText = getScoreText('Yudi', 5000);
console.log(scoreText);

// Challange Area
// Calculator Tip

let getTip = function (total, tipPercent = 0.2) {
  let tip = total * tipPercent;
  return tip;
};

let resultTip = getTip(100, 0.5);
console.log(resultTip);
