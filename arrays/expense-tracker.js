// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Jhon Doe has $1250 in expenses.

// buat wadah pemasukan expenses *
// buat function untuk mengambil semua ringkasan pengeluaran akun, dengan parameter kosong *
// siapkan variable untuk menampung semua total pengeluaran. *
// gunakan method perulangan array untuk membuat callback function pengeluaran *
// lalu jumlahkan antara total pengeluaran dengan amount *
// buat kalimat pakai string template dengan isi nama dan total pengeluaran. *

//================//

// add income array to account
// addIncome -> description, amount
// Tweak getAccountSummary
// Andrew Mead has a balance of $10, $100 in income. 90 in expenses

// tambahkan income di array account *
// buat function dengan nama addIncome dgn parameter desc, amount *
// buat variable penampung total pendapatan dan keseimbangan akun *
// gunakan method perulangan array untuk membuat callback function pendapatan *
// lalu jumlahkan antara total pendapatan dengan amount *
// lalu kalkulasikan total pendapatan dan total pengeluaran di keseimbangan akun *
// buat kalimat pakai string template dengan isi nama dan total pendapatan. *

const account = {
  name: 'Jhon Doe',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(function (expenses) {
      totalExpenses = totalExpenses + expenses.amount;
    });

    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has $${accountBalance}, $${totalIncome} in income, $${totalExpenses} in expenses.`;
  },
};

account.addExpense('Bread', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
account.addIncome('Freelance', 500);
console.log(account.getAccountSummary());
