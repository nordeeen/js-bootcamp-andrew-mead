// Primitive value : string, number, boolean, null, undefined.

// product --> Object.prototype --> null
// Array : myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request --> What do we want to do
// Response --> What was actually done
// XMLHttpRequest adalah API yang terdapat pada bahasa skrip peramban web seperti JavaScript.
// Ini digunakan untuk mengirimkan permintaan HTTP atau HTTPS kepada server web dan memuat respon data server kembali ke skrip.

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;

  // game1 bagi string lalu di perulangan param kata
  // buat variable letterEl untuk membuat element span
  // lalu masukan konten kata
  // puzzleEl panggil variable letterEl

  game1.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle();
  game1 = new Hangman(puzzle, 5);
  render();
};

//'2'

document.querySelector('#reset').addEventListener('click', startGame);
startGame();

// CALLBACK ABSTRACTION
// Umumnya callback function dapat menerima dua argumen.
// argumen error dan argumen sukses.

// getPuzzle('3')
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(error => {
//     console.log(`Error : ${error}`);
//   });

// getCountry('ID').then(
//   country => {
//     console.log(`name country : ${country.name}`);
//   },
//   error => {
//     console.log(`Error : ${error}`);
//   }
// );

// getCurrentCountry()
//   .then(country => {
//     console.log(`Nama Negara : ${country.name}`);
//   })
//   .catch(error => {
//     console.log(`Error : ${error}`);
//   });

// versi fetch
getLocation()
  .then(location => {
    console.log(
      `You currently in ${location.city}, ${location.region}, ${location.country}, ${location.loc}`
    );
  })
  .catch(error => {
    console.log(`Error : ${error}`);
  });

// versi promise chaining
// getLocation()
//   .then(location => {
//     return getLocation(location);
//   })
//   .then(location => {
//     console.log(`name region : ${location.city}`);
//     console.log(`name region : ${location.region}`);
//     console.log(`name country : ${location.country}`);
//   })
//   .catch(error => {
//     console.log(`Error : ${error}`);
//   });

//===========================//

// The Fetch API
// fetch('https://puzzle.mead.io/puzzle', {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Unable to fetch the puzzle');
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(error => {
//     console.log(`Error : ${error}`);
//   });

// Synchronous / Bloking
// Asynchronous / Non - Bloking

// const puzzle = getPuzzleSync();
// console.log(puzzle);

// console.log('Do something else');
/*
  // Making an HTTP Request
  const requestData = new XMLHttpRequest();

  requestData.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      console.log(e.target.status);
      const data = JSON.parse(e.target.responseText);
      console.log(data);
    } else if (e.target.readyState === 4) {
      console.log('And error has taken place');
    }
  });

  requestData.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
  requestData.send();

  //=====================//

  // Mencari nama ibukota negara
  const cityName = 'Kuala Lumpur';
  const requestCountry = new XMLHttpRequest();

  requestCountry.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(country => country.capital === cityName);
      console.log(country.name);
    }
  });

  requestCountry.open('GET', 'https://restcountries.com/v2/all');
  requestCountry.send();
 */
