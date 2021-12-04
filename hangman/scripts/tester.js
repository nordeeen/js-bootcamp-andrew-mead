// Buat Hangnam object function (word, remainingGuesses)
// inisialisasikan word menjadi huruf kecil dan tanpa spasi ('')
// ======= remainingGuesses
// ======= guessedLetters dengan array kosong
// ======= status dengan value 'playing'

const Hangnam = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
};

// Buat object prototype calculateStatus dengan parameter kosong
// buat konstanta finished => titik tuju ke word lalu tes dgn every() => parameter letter,
// yang me-return guessedLetters lalu includes letter
// setelah itu buat if else if else statement
// (jika remainingGuesses sm dengan 0), maka titik tuju ke status dgn value 'failed'
// (dan jika, finished) maka titik tuju ke status dgn value 'finished'
// (selain dari itu semua) maka titik tuju ke status dgn value 'playing'

Hangnam.prototype.calculateStatus = function () {
  const finished = this.word.every(letter =>
    this.guessedLetters.includes(letter)
  );

  if (this.remainingGuesses === 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

// Buat object prototype getStatusMessage dengan parameter kosong
// (jika, status sama dengan playing) maka return `Guesses left: titik tuju ke remainingGuesses`
// (dan jika, status sama dengan failed) maka return `Nice try! the word was "titik tuju ke word lalu pasang method join dengan string kosong"`
// (selain dari itu semua) maka return `Great work! You guessed the work!`

Hangnam.prototype.getStatusMessage = function () {
  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}.`;
  } else if (this.status === 'failed') {
    return `Nice try! the word was "${this.word.join('')}"`;
  } else {
    return `Great work! You guessed the work!`;
  }
};

//Buat object prototype getPuzzle dengan parameter kosong
// buat variable let puzzle dengan value string kosong
// buat perulangan untuk word dengan parameter letter dengan isinya yaitu,
// 1. (jika, guessedLetters di include si letter   atau   letter sama dengan string kosong)
// maka puzzle += letter
// 2. (selain dari itu) maka puzzle += '*'
// Dan return puzzle

Hangnam.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === '') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return puzzle;
};

// Buat object prototype makeGuess dengan parameter guess
// inisialisasikan guess sama dengan guess ke huruf kecil
// Buat konstanta isUnique yang menyatakan not guessedLetters lalu includes si gues
// Buat konstanta isBadGuess yang menyatakan not word lalu includes si gues
// Setelah itu buat 3 if statement
// (jika, status tidak sama dengan 'playing') maka di return
// (jika, isUnique) maka guessedLetters di push si guess
// (jika, isUnique dan dan isBadGuess) maka titik tuju ke remainingGuesses dengan decretment
// lalu call calculateStatus()

Hangnam.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }

  this.calculateStatus();
};

// buat dom puzzleEl arahkan ke id #puzzle
// buat dom guessesEl arahkan ke id #guesses
// baut konstanta game1 untuk deklarasikan isi object Hangman ('Cat', 2)
// buat puzzleEl dengan dom textContent arahkan ke game1 dot getPuzzle()
// buat guessesEl dengan dom textContent arahkan ke game1 dot getStatusMessage()

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangnam('Cat', 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();

// buat addEvenlistener untuk jendela yang di arahkan ke keypress (e)
// buat konstanta guess dengan isi String dot fromCharCode(e.charCode)
// call game1 dot makeGuess( parameter guess)
// call puzzleEl dot textContent sama dengan game1 dot getPuzzle()
// call guessesEl dot textContent sama dengan game1 dot getStatusMessage()

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();
});
