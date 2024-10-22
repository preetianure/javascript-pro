const form = document.getElementById('booking-form');
const bookingList = document.getElementById('bookings');
const submitBtn = document.getElementById('submit-btn');

let bookings = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const booking = {
        name,
        email
    };

    bookings.push(booking);
    renderBookings();
    form.reset();
});

function renderBookings() {
    bookingList.innerHTML = '';
    bookings.forEach((booking, index) => {
        const bookingItem = document.createElement('li');
        bookingItem.classList.add('booking-item');
        bookingItem.innerHTML = `
            ${booking.name} (${booking.email})
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        bookingList.appendChild(bookingItem);
    });
}

bookingList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        bookings.splice(index, 1);
        renderBookings();
    } else if (e.target.classList.contains('edit-btn')) {
        const index = e.target.dataset.index;
        const booking = bookings[index];
        editBooking(booking, index);
    }
});

function editBooking(booking, index) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    nameInput.value = booking.name;
    emailInput.value = booking.email;

    submitBtn.textContent = 'Update';
    submitBtn.dataset.index = index;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;

        bookings[index] = {
            name: updatedName,
            email: updatedEmail
        };

        renderBookings();
        form.reset();
        submitBtn.textContent = 'Submit';
        submitBtn.dataset.index = null;
    });
}