let temp = 55;

// Logical And operator = True if both sides are true. False otherwise
// Logical Or operator = True if at least one sides is true. False otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out!');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside!');
} else {
  console.log('Eh. Do what you want!');
}

// Challange Area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Are both vegan? Only offer up vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('At least one vegan? Make sure to offer up some vegan options');
} else {
  console.log('Else, Offer up anything on the menu');
}
