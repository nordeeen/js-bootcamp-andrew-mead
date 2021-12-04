// Lexical Scope (Static Scope) = variabel yang di tentukan disatu bagian program mungkin
//tidak dapat di akses di tempat lain dalam program anda.

// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block
// In a scope you can acces variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
// Local Scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)

let varOne = 'varOne';

if (true) {
  console.log(varOne);

  let varTwo = 'varTwo';
  console.log(varTwo);

  if (true) {
    let varFour = 'varFour';
    console.log(varFour);
  }
}

if (true) {
  let varThree = 'varThree';
  console.log(varThree);
}

console.log(varTwo);
