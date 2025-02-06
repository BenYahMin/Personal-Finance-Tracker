// Initialize transaction history and balance
let transactions = [];
let balance = 0;

// Get elements
const balanceDisplay = document.getElementById('balance');
const transactionHistory = document.getElementById('transaction-history');
const transactionForm = document.getElementById('transaction-form');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const descriptionInput = document.getElementById('description');

// Add transaction
transactionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const description = descriptionInput.value || "No description";

  // Create transaction object
  const transaction = {
    amount,
    category,
    description,
    date: new Date().toLocaleDateString()
  };

  // Add transaction to array
  transactions.push(transaction);

  // Update balance
  balance += amount;
  balanceDisplay.textContent = `$${balance.toFixed(2)}`;

  // Clear form fields
  amountInput.value = '';
  descriptionInput.value = '';

  // Display transaction in history
  renderTransactions();
});

// Render transaction history
function renderTransactions() {
  transactionHistory.innerHTML = '';
  transactions.forEach(transaction => {
    const transactionElement = document.createElement('li');
    transactionElement.innerHTML = `
      <span>${transaction.date} - ${transaction.category}</span>
      <span>${transaction.description}</span>
      <span>${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount).toFixed(2)}</span>
    `;
    transactionHistory.appendChild(transactionElement);
  });
}