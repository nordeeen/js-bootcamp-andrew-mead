/*
Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.

Maksudnya gimana ?

Kita analogikan seperti ini.

Setiap hari kamu berangkat ke kantor dengan mengendari mobil pribadimu.
Kamu sebenarnya tidak perlu tahu bagaimana mesin mobil itu bekerja sampai membuat mobilnya bisa bergerak, atau bagaimana sistem pembakaran dalam mesinnya,
 atau apa yang terjadi di dalam mesin ketika kamu menginjak pedal gas.
Kamu tidak perlu tahu semua itu.
Yang perlu kamu tahu adalah cara menyalakan mobil dan tau cara menyetir.
Untuk contoh penerapannya, perhatikan kode berikut!


Dari contoh di atas, kamu di tidak perlu tahu bagaimana total biaya ongkir di kalkulasi.
Yang perlu kamu tahu adalah bagaimana cara menampilkan biayanya, yaitu dengan memanggil function tampilBiaya.
*/

function Ongkir(bobot) {
  var berat = berat;
  var totalBiaya = function () {
    return bobot * 1000;
  };

  this.tampilBiaya = function () {
    return totalBiaya();
  };
}

const laptop = new Ongkir(4);
console.log(laptop.totalBiaya()); // 4000
