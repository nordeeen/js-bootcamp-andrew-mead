/*
 Promise adalah Object yang merepresentasikan keberhasilan / kegagalan sebuah 
 event yang asynchronous di masa yang akan datang.

 1. resolve = janjinya terpenuhi.
 2. rejected = janjinya tidak terpenuhi.
 3. finally = waktu tunggunya telah selesai.

janji (terpenuhi / ingkar)
states (fulfilled / rejected / pending)
callback (resolve / rejected / finally)
aksi (then /catch)

Beberapa hal penting perbedaan callback dan promise adalah :
Callback adalah function sedangkan promise adalah object.
Callback di kirim melalui parameter, sedangkan promise mengembalikan object
Callback digunakan untuk menghandle succes dan failure,sedangkan promise tidak
Callback dapat digunakan untuk beberapa event sekaligus, sedangkan promise hanya untuk satu event


Benefit utama dari promise adalah membuat code lebih readable dan manajemen error yang lebih baik.
*/

// Contoh Promise 1 (WPU)
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('janji telah ditepati!');
//   } else {
//     reject('Ingkar janji...');
//   }
// });

// janji1
//   .then(response => console.log('OK! : ' + response))
//   .catch(response => console.log('NOT OK! :' + response));

// Contoh Promise 2 (WPU)
// let myPromise = false;
// const promiseTwo = new Promise((resolve, reject) => {
//   if (myPromise) {
//     setTimeout(() => {
//       resolve('ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// promiseTwo
//   .finally(() => console.log('selesai menunggu!'))
//   .then(response => console.log('OK! :' + response))
//   .catch(response => console.log('NOT OK! :' + response));
// console.log('selesai');

// Promise.all()
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Avengers',
        sutradara: 'Jojo',
        pemeran: 'Adi, Erik',
      },
    ]);
  }, 2000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve({
      kota: 'Bandung',
      temp: 26,
      kondisi: 'Cerah Berawan',
    });
  });
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
