let myBook = {
  title: 'Smart with Islam',
  author: 'Ust. Felix Siauw',
  pageCount: 230,
};

let otherBook = {
  title: 'Habits',
  author: 'Ust. Felix Siauw',
  pageCount: 670,
};

// create a function to call object propety

let getSummary = function (book) {
  return {
    summaryBook: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} and ${book.pageCount} pages long `,
  };
};

let getBook = getSummary(myBook);
let getOtherBook = getSummary(otherBook);
console.log(`${getOtherBook.pageCountSummary}`);
console.log(`${getBook.summaryBook}
`);

// Challange Area
// create function - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
    celsius: ((fahrenheit - 32) * 5) / 9,
  };
};

let temps = convertFahrenheit(74);
console.log(temps);
