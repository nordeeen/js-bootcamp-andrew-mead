console.log('=== Try Catch ===');

// Try Catch adalah suatu metode untuk handling error (penanganan error).
// Jika block try menemukan error/throw maka akan berhenti, dan dilanjutkan ke proses catch.
// berguna ketika request AJAX

// 1. try => kode yang akan di eksekusi.
// 2. catch => jika ada error akan masuk ke blok catch ini.
// 3. throw => custom error (optional).
// 4. finally => blok kode yang akan dijalankan setelah try catch selesai (optional).

// crash = error yang menyebabkan program berhenti.

let sayHello = () => {
  console.log('Hello World!');
};

// error bentuknya berupa object dengan key name dan message
try {
  sayHello2();
} catch (error) {
  console.log('error name :', error.name);
  console.log('error message :', error.message);
} finally {
  console.log('blok finally akan dipanggil terakhir');
}

console.log('==========================');

let hitungPenjumlahan = (a, b) => a + b;

try {
  let hasil = hitungPenjumlahan(4, 1);

  if (hasil < 5) {
    throw {
      name: 'gagal',
      message: 'hasil kurang dari 5',
    };
  } else if (hasil < 10) {
    throw {
      name: 'gagal',
      message: 'hasil kurang dari 10',
    };
  }

  console.log(hasil);
} catch (e) {
  console.log('error name :', e.name);
  console.log('error message :', e.message);
}
