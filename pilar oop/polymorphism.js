/*
Dari asal katanya, poly berarti banyak dan morphe berarti bentuk.

Dengan kata lain polymorphism berarti banyak bentuk.

Polymorphism adalah kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk.

Analogi sederhananya seperti ini.
Salah satu fungsi smartphone adalah sebagai alat komunikasi.
Smartphone sebagai alat komunikasi bentuknya bisa macam — macam, bisa dengan telepon call, bisa dengan mengirim pesan text melalusi sms, bisa dengan pesan text lewat aplikasi chat, bisa dengan video call, dll.
Jadi fungsi utamanya adalah sebagai alat komunikasi namun dengan cara atau bentuk yang berbeda.


Sekarang pertanyaannya adalah apa yang terjadi ketika method greet di class User tidak ada ?

Seperti yang kamu liat, karna class User tidak memiliki method greet maka ia akan menjalankan method greet dari parent class classnya yaitu Human.
Dari contoh kasus di bawah, yang memiliki banyak bentuk adalah method greetnya.
Fungsi utama dari method greet sendiri adalah untuk menyampaikan salam.
Salamnya sendiri memilik dua bentuk, yang satu menyampaikan salam dalam bahasa Indonesia dan yang satu menyapaikan salam dalam bahasa Inggris.
Contoh sederhananya kurang lebih seperti itu.

*/

class Human {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello Good Morning, my name is ${this.name}`;
  }
}

class User extends Human {
  constructor(name) {
    super(name);
  }

  //   greet() {
  //     return `Hello Good Morning, my name is ${this.name}`;
  //   }
}

const isName = new User('Jojo');
console.log(isName.greet()); // Hello Good Morning, my name is Jojo
