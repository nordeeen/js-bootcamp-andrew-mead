/*

Inheritance dalam OOP adalah sebuah proses dimana sebuah class mewariskan property dan 
methodnya ke class lain atau childnya.

Dari kode diatas, berarti class People mewariskan property name dan age ke class Person.
*/

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// sub class dari People
class Person extends People {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

// Instansiasi sebuah objek baru
const tanjiro = new Person('Kamado Tanjiro', 15, 'Demon Slayer');
console.log(tanjiro.name); // Kamado Tanjiro
console.log(tanjiro.age); // 15
console.log(tanjiro.job); // Demon Slayer
