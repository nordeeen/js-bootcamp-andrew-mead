/*
LEXICAL SCOPE

Setelah membahas tentang scoping dan jenis-jenisnya, yang menarik untuk kita explore adalah tentang lexical scope dan dynamic scope. 
Lexical scope adalah scope yang dibaca saat kode JavaScript melalui proses compile, atau sering disebut compile-time. 
Lexical scope ini yang mengatur di scope mana kita harus mencari sebuah variable. Lexical scope bisa dibilang scoping yang “kasat mata” 
karena penentuan scope-nya terpampang jelas di kode yang kita tuliskan sendiri. Lexical scope di JavaScript memungkinkan kita 
untuk mengakses setiap variable di dalam function yang dideklarasikan di scope function luarnya.

Masih dengan analogi ember, sekarang jika kita punya sebuah ember merah besar yang di dalamnya ada banyak kelereng dan juga ada 
sebuah ember biru yang kosong. dengan prinsip yang ada di lexical scope, berarti jika kita melihat dari sudut pandang ember biru, 
si ember biru bisa mengetahui atau melihat ada kelereng apa saja yang ada di ember merah.

*/

function sebuahFunction() {
  // kita mendeklarasikan variable di luar scope functionDiDalam
  let kelereng = 'kuning';
  let kelereng1 = 'biru';

  function functionDiDalam() {
    // variable kelereng masih dapat kita akses di dalam function yang berbeda scope.
    // lexical scope yang memungkinkan kita untuk mengakses variable dengan nested function.
    console.log(kelereng);
    console.log(kelereng1);
  }

  functionDiDalam();
}

sebuahFunction(); // kelereng kuning
