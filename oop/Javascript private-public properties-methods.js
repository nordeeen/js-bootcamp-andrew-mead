/*
Di dalam object oriented programing di kenal istilah access modifier atau visibility.

Access modifier atau visibility adalah sebuah konsep yang di gunakan untuk mengatur tingkat akses 
terhadap property atau method dalam sebuah objek.

Ada 2 access modifier yang akan kita perlajari disini, yaitu private dan public.

Private adalah ketika property atau methodnya hanya dapat diakses atau di gunakan dalam fungsi tersebut.

Dengan kata lain instance objeknya tidak dapat menggunakan property atau method tersebut.

Public adalah ketika property atau methodnya dapat di akses dari luar fungsi tersebut.
*/

function BarangUser(name, price, weight, color) {
  // public property
  this.name = name;
  this.price = price;

  //private property
  var weight = weight;
  var color = color;

  // public method
  this.detail = function () {
    return this.name + ' ' + this.price;
  };

  // private method
  function showWeightColor() {
    return weight + ' ' + color;
  }
}

// Instansiasi sebuah objek
const User = new BarangUser('Lenovo', 10, 2, 'Blue');

console.log(User); // BarangUser { name: 'Lenovo', price: 10, detail: [Function (anonymous)]}
console.log(User.name); // Lenovo
console.log(User.weight); // undefined
console.log(User.detail()); // Lenovo 10
console.log(User.showWeightColor()); // TypeError: User.showWeightColor is not a function
