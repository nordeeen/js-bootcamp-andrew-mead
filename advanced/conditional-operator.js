const myAge = 27;
let message = myAge >= 23 ? 'You can vote!' : 'You cannot vote!!';
console.log(message);

//================//

const userAge = 23;
const showPage = () => {
  return 'Showing the page';
};

const showPageError = () => {
  return 'Showing the page error';
};

const userMessage = userAge >= 20 ? showPage() : showPageError();
console.log(userMessage);

// Challange
// 1. Print 'team size: 3' if less than or equal to 4
// 2. Print 'Too many people on your team' otherwise

const team = ['Tyler', 'Porter', 'Jhon', 'Alex', 'Miguel'];
console.log(
  team.length <= 4
    ? `team size: ${team.length}`
    : 'Too many people on your team'
);
