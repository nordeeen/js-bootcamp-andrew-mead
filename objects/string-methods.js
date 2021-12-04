let name = '  Bambang Pamungkas  ';

// length property
console.log(name.length);

// convert to UpperCase
console.log(name.toUpperCase());

// convert to LowerCase
console.log(name.toLowerCase());

// trim (berfungsi untuk menghapus spasi di awal dan di akhir )
console.log(name.trim());

// includes method
// selama huruf atau angka masih sesuai di variable password maka tetap true
let password = '123456abcdpassword';
console.log(password.includes('password'));

// Challange Area
let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes('123456')) {
    return true;
  } else {
    return false;
  }
};
// !password.includes('123456')) = mengecualikan string parameter ini / false
console.log(isValidPassword('abcdpassword'));
console.log(isValidPassword('123456789010'));
console.log(isValidPassword('passwordabcd'));
