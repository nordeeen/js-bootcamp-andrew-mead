/*
SYNCHRONOUS = yang paling umum dan mudah di mengerti. Setiap perintah di eksekusi satu persatu sesuai urutan kode yang anda tuliskan.
synchronous disebut proses Blocking.
Dalam dunia nyata ini mirip seperti antrian di BANK. Jika anda berada antrian nomor 4, 
maka anda akan dilayani setelah antrian 1–3 sampai selesai.


ASYNCHRONOUS = hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. 
 Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai. 
 Daripada menunggu, asynchronous akan mengeksekusi perintah selanjutnya. Wait, sampai disini mungkin tidak masuk akal

1. Apakah javascript secara default mengeksekusi perintah dengan metode synchronous atau asynchronous ?
2. Bisakah kita membuat proses asynchronous ?
3. Dalam kasus apa teknik asynchronous digunakan ?

Jawabannya :
1. Javascript secara default mengeksekusi perintah secara synchronous, kecuali untuk beberapa hal seperti : ajax,websocket, worker, file, database, animasi dan beberapa hal lainya.
2. Kita tidak bisa membuat proses asynchronous murni. Tapi untuk membuat simulasi iya kita bisa menggunakan fungsi setInternal dan setTimeout
3. Teknik Asynchronous paling banyak digunakan mengelola komunikasi yang tidak mungkin sinkron atau harus menunggu seperti proses request ajax, 
operasi file, koneksi ke database, websocket, real time communication seperti pada aplikasi chating dan masih banyak lagi.


 */

// synchronous
console.log('Hello');
console.log('Javascript');
console.log('ini contoh Sync');

console.log('=============');

// asynchronous
console.log('Hello');
setTimeout(() => {
  console.log('ini contoh Async');
}, 3000);
console.log('Javascript');
