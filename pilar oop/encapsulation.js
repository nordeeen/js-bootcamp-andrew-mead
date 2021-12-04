/*
Encapsulation atau enkapsulasi adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek.

Enkapsulasi mencakup gagasan bahwa data(property atau method) suatu objek tidak boleh langsung diekspos.

Selain defenisi diatas, enkapsulasi juga berarti membungkus property dan method dalam satu unit/function.

Kita buat sebuah contoh kasus seperti ini.

Kita punya sebuah function constructor untuk menghitung ongkir sebuah barang.
Total biaya ongkir di dapat dari hasil penjumlahan pajak yang nilainya constant yaitu 500 dan berat di kali 1000.

Dengan menggunakan teknik encapsulation kita membatasi akses dari luar untuk mengubah konstanta pajak tadi.
Caranya adalah mengubah property pajak dari public menjadi private, dengan menggunakan var/let.

*/

function Ongkir(berat) {
  let pajak = 500;
  let biaya = function () {
    return berat * 1000;
  };

  this.totalBiaya = function () {
    return biaya() + pajak;
  };
}

const laptop = new Ongkir(4);
laptop.pajak = 800; // bayangkan bila kita secara tidak sengaja mengganti value dari properti pajak dari luar. => 4800
console.log(laptop.totalBiaya()); // setelah menggunakan teknik encapsulation hasil tetap 4500 bukan 4800 lagi.
