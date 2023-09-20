const addBookBtn = document.getElementById('add-book');
const modal = document.getElementById('get-book-details');
const overlay = document.getElementById('overlay');

function showModal() {
    modal.style.display = 'flex';
    overlay.style.display = 'flex';
}

function hideModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

addBookBtn.addEventListener('click', showModal);
overlay.addEventListener('click', hideModal);