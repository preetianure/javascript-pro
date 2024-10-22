document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.querySelector('#expense-form');
    const amountInput = document.querySelector('#amount');
    const descriptionInput = document.querySelector('#description');
    const expenseList = document.querySelector('#expense-list');
    const clearExpensesBtn = document.querySelector('#clear-expenses');

    expenseForm.addEventListener('submit', addExpense);
    clearExpensesBtn.addEventListener('click', clearAllExpenses);

    function addExpense(e) {
        e.preventDefault();

        const amount = amountInput.value;
        const description = descriptionInput.value;

        if (amount && description) {
            const li = document.createElement('li');
            li.textContent = `${description}: $${amount}`;

            expenseList.appendChild(li);

            // Clear input fields
            amountInput.value = '';
            descriptionInput.value = '';
        }
    }

    function clearAllExpenses() {
        expenseList.innerHTML = '';
    }
});


  