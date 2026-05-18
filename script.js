// Example static finance data
const financeData = {
  balance: 12000.50,
  income: 4500.00,
  expenses: 3200.75
};

document.getElementById('balance').textContent = '$' + financeData.balance.toFixed(2);
document.getElementById('income').textContent = '$' + financeData.income.toFixed(2);
document.getElementById('expenses').textContent = '$' + financeData.expenses.toFixed(2);
