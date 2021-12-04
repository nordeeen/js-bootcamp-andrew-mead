// Function constructor
// Function constructor pada dasarnya adalah sebuah function declaration biasa.

// function Person(){} => ini adalah function constructor
// function person(){} => ini adalah function declaration biasa.

// This adalah sebuah keyword khusus yang merujuk pada pada objek pemiliknya.

/*
    function Barang(nama, harga) {
    this.nama = nama;
    this.harga = harga;
    this.detail = function () {
        return this.nama + ' ' + this.harga;
    };
    }

*/

// Classes
// Class adalah salah satu fitur baru yang di perkenalkan di javascript versi 2015 atau ES6.

class Barang {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  detail() {
    return this.nama + ' ' + this.harga;
  }
}

// Instance
// Sebuah objek baru yang di buat dari sebuah constructor disebut sebagai instance.
const barang1 = new Barang('Lenovo Thinkpad x230', '2 juta');
const barang2 = new Barang('Iphone pro max 11', '8 juta');
const barang3 = new Barang('Asus smartphone', '5 juta');

console.log(barang1.nama);
console.log(barang2.harga);
console.log(barang3.detail());
