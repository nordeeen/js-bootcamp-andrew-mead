/* Manipulating Arrays with Methods  :
console.log(notes[0]); // mengambil item di dalam array 1
console.log(notes[notes.length - 1]); // mengambil item di dalam array 2


push = menambahkan item array baru di baris terakhir.
 pop = menghapus item array terakhir.
 shift = menghapus item array pertama.
 unshift = menambahkan item array baru di baris pertama.
 splice = memungkinkan utk menambahkan elemen array ke tengah atau menghapus elemen dari mana saja.

 notes.splice(<indeks><total>);
 notes.splice(2,1) = di indeks ke-2, total yang di remove 1.
 forEach = method yang membuat perulangan pada array.
 */

const myNotes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'];

// notes[2] = 'This is the new note 3'; // mengubah atau menetapkan sebuah elemen baru.
// console.log(notes.shift());
// notes.unshift('My First Note');
// console.log(notes.pop(2));
// notes.push('My New Note');

// notes.splice(1, 1); // remove: Note 2
// notes.splice(1, 1, 'This is the new second item'); // [ 'Note 1', 'This is the new second item', 'Note 3' ]

// console.log(notes.length); // print semua item array
// console.log(notes);

// LOOPING OVER ARRAY
// this is callback function.
myNotes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

// THE FOR LOOP
// Counting... 1
for (let count = 2; count >= 0; count--) {
  console.log(count);
}

for (let count = myNotes.length - 1; count >= 0; count--) {
  console.log(myNotes[count]);
}

// SEARCHING ARRAYS PART I
// IndexOf() = (method yg mengembalikan posisi nilai string dari array pertama dari string yang di tentukan. Jika tidak ada kecocokan string ditemukan -1 dikembalikan)
// findIndex() = (method yg mengembalikan indeks dari elemen pertama dalam array yg lulus tes (tersedia sbg fungsi)).
// find() = (mengembalikan nilai elemen pertama dalam array yang disediakan yang memenuhi fungsi pengujian yang disediakan. Jika tidak ada nilai yang memenuhi fungsi pengujian, undefined dikembalikan.)

const nameStudents = ['Radit', 'Dika', 'Elvin', 'Mega', 'Fitri', 'Dewi'];

const notes = [
  {
    title: 'My Next Trip',
    body: 'I Would like to go to Spain',
  },
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
];

const getNote = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitle = note.title.toLowerCase().includes(query.toLowerCase());
    const isBody = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitle || isBody;
  });
};

console.log(getNote(notes, 'spain'));

const index = notes.findIndex(function (data, index) {
  console.log(data);
  return data.title === 'Office modification';
});

console.log(index); // Bila index array yg di tuju telah ketemu, maka program akan berhenti.
console.log(nameStudents.indexOf('Elvin'));

// SEARCHING ARRAYS PART II

/*
MENGGUNAKAN METHOD ARRAY findIndex()

const findNotes = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title === noteTitle;
  });
  return notes[index];
};
*/

// MENGGUNAKAN METHOD ARRAY find()
const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note = findNote(notes, 'some habbits to work on');
console.log(note);

// FILTERING ARRAYS
//includes() = Method ini berfungsi untuk mengecek apakah sebuah data ada di dalam array atau tidak. Biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah ada di dalam array.

/*
  FILTERED I

  const filteredNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLocaleLowerCase().includes('bit');
    const isBodyMatch = note.body.toLocaleLowerCase().includes('bit');
    return isTitleMatch || isBodyMatch;
  });

*/

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
    const isBodyMatch = note.body
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, 'work'));

// ================//
