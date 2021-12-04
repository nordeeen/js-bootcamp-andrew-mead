// addIncome
// resetAccount
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expense.

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

let dataUser = {
  name: 'Jo',
  income: 0,
  expense: 0,
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let addExpense = function (account, expense) {
  account.expense = account.expense + expense;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expense = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income + account.expense;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expense} in expense.`;
};

addIncome(dataUser, 15000);
addExpense(dataUser, 500);
addExpense(dataUser, 550);
console.log(getAccountSummary(dataUser));
resetAccount(dataUser);
console.log(getAccountSummary(dataUser));
