/*
Hypertext Transfer Protocol (HTTP) adalah protokol yang di gunakan World Wide Web (WWW) untuk mengirim data antar 2 sistem, 
yang selanjutnya disebut Client & Server, HTTP Client itu bentuknya beragam, bisa Browser, Headless Browser, cURL dan lainya, 
untuk HTTP Server juga beragam, dan ditulis di berbagai bahasa p

emrograman atau web server, 
misalnya PHP, GoLang, NGINX, APACHE, NodeJS HTTP Server, dan banyak lagi.

XHR atau XMLHttpRequest merupakan browser built-in XMLHttpRequest object, 
salah satu object yang terdapat pada JavaScript untuk melakukan permintaan (request) data dari klien ke server. 
Bila merujuk ke HTTP maka XHR memiliki posisi sebagai client. Sederhananya, XHR adalah HTTP client yang dimiliki 
oleh JavaScript untuk melakukan permintaan data ke server.

XHR bersifat asynchronous, itu berarti JavaScript akan mengeksekusi kode XHR dan membiarkannya berjalan di latar belakang. Perhatikan kode berikut:


Apa manfaat XHR?
Berdasarkan segala sesuatu yang telah saya jelaskan sebelumnya, dengan XHR kita dapat melakukan transaksi data antara 
client dan server dibelakang layar, melakukan perpindahan webpage tanpa harus me-reload seluruh isi webpage, 
mengkonsumsi RESTful API dan yang lainnya.

GET = untuk mengambil data spesifik. 
POST = untuk membuat sesuatu yang baru pada server, seperti meng-create record baru atau yang lainnya.
DELETE = digunakan untuk menghapus sumber daya yang ditentukan oleh URI-nya.
PATCH = digunakan untuk memperbarui nilai properti sumber daya.
PUT =  digunakan untuk memperbarui data yang ada.
OPTIONS = 

================
AJAX

AJAX ada hubungannya dengan XHR. Karena, AJAX menggunakan XHR di dalamnya. Bila kamu pernah menggunakan jQuery, 
jQuery memiliki API $.ajax untuk melakukan HTTP request ke server. Dengan menggunakan $.ajax itu sama saja kamu menggunakan XHR, 
hanya saja jQuery memberikan fitur tambahan pada “XHR”-nya, seperti kompatibilitas lintas browser.
Jadi, kalau kamu menggunakan jQuery, lebih baik gunakan kode $.ajax ketimbang XMLHttpRequest . 
Karena lebih mudah digunakan. Tapi, kalau kamu menggunakan vanilla JavaScript, 
jangan sampai me-load jQuery hanya karena ingin menggunakan $.ajax -nya saja — gunakan XMLHttpRequest .

*/

//=========================//

// MENGGUNAKAN METHOD GET
let http = new XMLHttpRequest(); // inisialisasi
http.open('GET', 'https://reqres.in/api/users'); // tentukan server tujuan
http.send(); // eksekusi
http.addEventListener('load', () => {
  //callback, ketika server memberi response
  console.log(http.responseText);
});

// MENGGUNAKAN METHOD POST
// menambahkan header Content-Type pada XHR object. Header merupakan sebuah informasi seputar rincian permintaan yang diberikan kepada server.
let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://reqres.in/api/users');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('name=Ahmad Nurdiansah&job=Front-End Developer');
xhr.addEventListener('load', () => {
  console.log(xhr.responseText);
});

//=========================//

// cek response status code
// Kode di atas akan menampilkan response dari server bila response status lebih dari sama dengan 200 dan kurang dari sama dengan 226.
// Bila response status di luar itu maka akan menampilkan teks “Galat” pada console browser.

http.addEventListener('load', () => {
  if (http.status >= 200 && http.status <= 226) {
    console.log(http.responseText);
  } else {
    console.log('Galat');
  }
});
