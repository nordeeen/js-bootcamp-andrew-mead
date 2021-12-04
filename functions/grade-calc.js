// students score, total possible score
// 15/20 => You got a C (75%)!
// A 90 - 100, B 80-89 , C 70-79 , D 60-69 , F 0-59

// menggunakan Try Catch
const gradeCalculate = function (value, totalValue) {
  if (typeof value !== 'number' || typeof totalValue !== 'number') {
    throw Error('Please provide numbers only');
  }

  const percent = (value / totalValue) * 100;
  let letterGrade = '';

  if (percent >= 90) {
    letterGrade = 'A';
  } else if (percent >= 80) {
    letterGrade = 'B';
  } else if (percent >= 70) {
    letterGrade = 'C';
  } else if (percent >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return `You got a ${letterGrade} (${percent}%)`;
};


try {
  const resultCalc = gradeCalculate(9, true);
  console.log(resultCalc);
} catch (e) {
  console.log(e.message);
}


