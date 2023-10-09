const addBookBtn = document.getElementById('add-book');
const modal = document.getElementById('get-book-details');
const overlay = document.getElementById('overlay');
const inputs = document.querySelectorAll('input');
const addNewBookBtn = document.querySelector('input[type="submit"]');
const error = document.querySelector('.error');
const read = document.getElementById('read');
const form = document.querySelector('form');

// function Book(title, author, pages, reviews, rating, status, cover_img) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.reviews = reviews;
//     this. rating = rating;
//     this.status = status;
//     this.cover_img = cover_img;
// }

// Book.prototype.getBookId = function () {
//     const id = this.title.toLowerCase().split(' ');
//     return id.reduce((concatStr, item) => {
//         return concatStr + item.trim();
//     })
// }

class Book {
    constructor(title, author, pages, reviews, rating, status, cover_img) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.reviews = reviews; 
        this.rating = rating;
        this.status = status;
        this.cover_img = cover_img;
    }

    get bookId () {
        const id = this.title.toLowerCase().split(' ');
        return id.reduce((concatStr, item) => {
          concatStr + item.trim();
        });
    }
}
const book = new Book('Fantastic Mr.Fox', 'Roald Dahl', '290', '80', '4', 'read', 'images/book_covers/mr-fox.jpg');

const booksArr = [book];

function getFormData (event) {
    const obj = {};
    event.preventDefault();
    const nodeListLen = inputs.length - 2;
    for(let i = 0; i < nodeListLen; i++) {
        const item = inputs[i];

        if(item.value === '' && item.type !== 'file') {
            error.innerText = 'Fill out all red feilds.';
            return;

        } else {
            if(item.type === 'text' || item.type === 'number' || item.type === 'file') {
                obj[item.name] = item.value;
            }
        }

    }
    if (read.checked) {
        obj['status'] = 'read';
    } else {
        obj['status'] = 'not read';
    }
    
    hideModal();
    return obj;
}

function addBooktoArray (event) {
    const obj = getFormData(event);
    obj.author = `${obj.fname} ${obj.lname}`;
    if(obj) {
        booksArr.push(new Book(obj.title, obj.author, obj.pages, obj.reviews, obj.rating, obj.status, obj.cover_img));
    }
    addNewBookToDom(booksArr);
}

function showModal() {
    modal.style.display = 'flex';
    overlay.style.display = 'flex';
}

function hideModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    error.innerText = '';
    form.reset();
    
}

addNewBookBtn.addEventListener('click', addBooktoArray);
addBookBtn.addEventListener('click', showModal);
overlay.addEventListener('click', hideModal);
