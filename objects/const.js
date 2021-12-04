// variable const tidak bisa di ubah-ubah, jika telah di deklarasikan.
const isRaining = true;

// isRaining = false; // error
console.log(isRaining);

// property di dalam object tetap bisa di ubah,
// meskipun variable-nya const.
// yang tidak bisa ialah mengubah konsistensi dari variable const.
const person = {
  age: 20,
};

person.age = 25; // 25
console.log(person);
