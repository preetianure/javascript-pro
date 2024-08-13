const expenseList = document.getElementById('expenses-list');
const addExpenseForm = document.getElementById('add-expense-form');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseDescriptionInput = document.getElementById('expense-description');
const expenseCategorySelect = document.getElementById('expense-category');
const addExpenseBtn = document.getElementById('add-expense-btn');

let expenses = [];

addExpenseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = parseInt(expenseAmountInput.value);
    const description = expenseDescriptionInput.value;
    const category = expenseCategorySelect.value;

    if (amount && description && category) {
        const newExpense = {
            amount,
            description,
            category
        };
        expenses.push(newExpense);
        renderExpenses();
        resetForm();
    }
});

function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense) => {
        const expenseListItem = document.createElement('li');
        expenseListItem.textContent = `${expense.amount} - ${expense.description} (${expense.category})`;
        expenseList.appendChild(expenseListItem);
    });
}

function resetForm() {
    expenseAmountInput.value = 0;
    expenseDescriptionInput.value = '';
}