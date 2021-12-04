/*
Callback sebenarnya adalah function bedanya dengan function pada umumnya adalah di cara eksekusinya. 
Jika function pada umumnya di eksekusi berurutan dari atas ke bawah maka callback di eksekusi pada point tertentu, 
itu sebabnya di sebut callback.

Callback disebut juga dengan high-order function. Callback sebenarnya adalah function, 
bedanya dengan function pada umumnya adalah di cara eksekusinya. Jika function pada umumnya di eksekusi 
secara langsung sedangkan callback di eksekusi dalam function lain melalui parameter.

Kenapa function bisa di jadikan sebagai parameter ?

Function dalam javascript adalah object atau sering disebut first-class object, yang artinya :
Function bisa di jadikan parameter
Function dapat disimpan ke dalam variabel
Seperti object pada umumnya, function bisa memiliki property dan method
Function dapat mengembalikan value dalam bentuk function

Kapan Callback digunakan ?
Callback dapat digunakan untuk proses synchronous maupun asynchronous. Beberapa contoh implementasi callback adalah :
2. Injeksi atau modifikasi hasil eksekusi sebuah function
3. Event listener
4. Menangani proses asynchronous

AJAX(Asynchronous JavaScript and XML)
*/

// SYNCHRONOUS CALLBACK
/*
    function showName(callback) {
    const name = prompt('input your name :');
    callback(name);
    }

    showName(name => console.log(`Halo, ${name}`));
*/

// SYNCHRONOUS CALLBACK
/*
    const userData = [
    {
        nama: 'Ahmad Nurdiansah',
        email: 'ahmadnurdiansah@gmail.com',
        jurusan: 'Teknik Informatika',
    },
    {
        nama: 'Rahma Dewi Mustika',
        email: 'rahmadewimustikah@gmail.com',
        jurusan: 'Biologi',
    },
    {
        nama: 'Ajeng Tri Juliyanti',
        email: 'ajengtrijulianti@gmail.com',
        jurusan: 'Sastra Bahasa',
    },
    {
        nama: 'Revaldi Afrian',
        email: 'revaldiafrian@gmail.com',
        jurusan: 'Teknik Pertambangan',
    },
    ];

    console.log('start');
    userData.forEach(data => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date();
    }
    console.log(data.nama);
    });
    console.log('finish'); // finish harus menunggu sampai proses load data selesai.
*/

// ASYNCHRONOUS CALLBACK

const getDataMhs = (url, succes, error) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      succes(xhr.response);
    } else if (xhr.status === 404) {
      error();
    }
  };

  xhr.open('GET', url);
  xhr.send();
};

console.log('mulai');
getDataMhs(
  'dosen.json',
  result => {
    const data = JSON.parse(result);
    data.forEach(m => console.log(`nama : ${m.nama}, jurusan : ${m.jurusan}.`));
  },
  error => {
    console.log(error);
  }
);
console.log('selesai');
