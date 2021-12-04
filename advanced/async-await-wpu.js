/*
Async Await = sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan 
sementara eksekusi fungsinya sambil menunggu promise-nya selesai. 

async → mengubah function menjadi asynchronous
await → menunda eksekusi hingga proses asynchronous selesai.

Error handling pada async/await menggunakan try…catch

*/

// Promise
// const coba = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('selesai');
//   }, 2000);
// });

//console.log(coba); // pending
// coba.then(() => console.log(coba)); // Promise {'selesai'}

function cobaPromaise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, waktu);
    } else {
      reject('kelamaan dih!');
    }
  });
}

// const coba = cobaPromaise();
// coba.then(coba => console.log(coba)).catch(coba => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromaise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();
