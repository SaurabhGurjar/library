const userContent = document.querySelector('#user-content');


// create Book card
function createBookCard(bookObj) {
    let statusClass = '';
    if (bookObj.status === 'read') {
        statusClass = 'read';
    } else {
        statusClass = 'not-read';
    }

    if (bookObj.author === undefined) {
        bookObj.author = bookObj.fname + " " + bookObj.lname;
    } 

    return `
    <div class="book-cover"><img src=${bookObj.cover_img}></div>
    <div class="title-rating-wrapper">
    <div class="book-title">
    <h2 class="book-title">${bookObj.title}</h2>
    <h5 class="book-author">${bookObj.author}</h5>
    <button class='status-btn ${statusClass}'>${bookObj.status}</button>
    </div>
    <div class="book-numbers">
    <div class="num-wrapper">
    <h3 id="mrf-page-num">${bookObj.pages}</h3>
    <p>pages</p>
    </div>
    <div class="num-wrapper">
    <h3 id="mrf-reviews">${bookObj.reviews}</h3>
    <p>reviews</p>
    </div>
    <div class="num-wrapper">
    <h3 id="mrf-ratings">${bookObj.rating}</h3>
    <p>ratings</p>
    </div>
    </div>
    </div>
    <div class="read-and-remove-btn-wrapper">
    <button class="remove-book">X</button>
    <button id="book-card-forward-btn"><img
    src="icons/forward.svg" alt="icon"></button>
    </div>
    </div>`
}

function addWrapperDiv(book) {
    const div = document.createElement('div');
    div.classList.add('book-card', 'owned', 'your-library');
    div.id = book.title;
    return div;
}

function addNewBookToDom() {
    const arrlen = booksArr.length;
    const lastBook = booksArr[arrlen - 1];
    const div = addWrapperDiv(lastBook);
    div.innerHTML = createBookCard(lastBook);
    const yourBooks = document.querySelectorAll('.your-library');
    console.log(yourBooks.length, arrlen);

    if (arrlen > yourBooks.length) {
        userContent.appendChild(div);
    }    
}

function addSavedBooksToDom(bookArr) {
    bookArr.forEach((item) => {
        const div = addWrapperDiv(item);
        div.innerHTML = createBookCard(item);
        userContent.appendChild(div);
    });
}

function toggleStatus(statusBtn) {
    if (statusBtn.textContent === 'read') {
        statusBtn.textContent = 'not read';
        statusBtn.style.backgroundColor = 'red';
    } else {
        statusBtn.textContent = 'read';
        statusBtn.style.backgroundColor = 'green';

    }
}

addSavedBooksToDom(booksArr);

const statusBtn = document.querySelectorAll('.status-btn');
console.log(statusBtn);
statusBtn.forEach(item => {
    item.addEventListener('click', () => {
    toggleStatus(item);
})});