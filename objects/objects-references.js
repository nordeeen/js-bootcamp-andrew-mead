let myAccount = {
  name: 'Jo',
  expenses: 0,
  income: 0,
};

// let otherAccount = myAccount;
// otherAccount.name = 'Jeje';
// otherAccount.expenses = 5000;
// otherAccount = {};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  account.income = account.income + amount;
};

addExpense(myAccount, 1500);
console.log(myAccount);

// ==================== //
console.log({} === {}); // false

let someObject = {};
let otherObjcet = someObject;
console.log(someObject === otherObjcet); // true
