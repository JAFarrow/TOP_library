const formToggle = document.getElementById('addBookBtn');
const additionOverlay = document.getElementById('inputOverlay')
const mainPage = document.querySelector('main');

const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookPagesInput = document.getElementById('bookPages');
const bookReadInput = document.getElementById('bookReadSlider');
const submitBtn = document.getElementById('submitBtn');

let myLibrary = [];

formToggle.addEventListener('click', () => {
    additionOverlay.classList.remove('inputBoxHide');
    additionOverlay.classList.add('inputBoxShow');
});

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function cardCreation (obj) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('bookCard');
    let bookTitle = document.createElement('h3');
    bookTitle.innerText = obj.title;
    cardDiv.appendChild(bookTitle);
    let bookAuthor = document.createElement('h3');
    bookAuthor.innerText = obj.author;
    cardDiv.appendChild(bookAuthor);
    let bookPages = document.createElement('p');
    bookPages.innerText = obj.pages;
    cardDiv.appendChild(bookPages);
    return cardDiv; 
};

function cardPush (card) {
    mainPage.appendChild(card);
}

function customSubmit(event) {
    myLibrary.push(new book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookReadInput.checked));
    additionOverlay.classList.remove('inputBoxShow');
    additionOverlay.classList.add('inputBoxHide');
    console.log(myLibrary)
    event.preventDefault();
}

submitBtn.addEventListener('click', customSubmit, false);

cardPush(cardCreation({
    "title": "Hello",
    "author": "Benis",
    "pages": "123",
    "read": true
}));

cardPush(cardCreation({
    "title": "Hello",
    "author": "Benis",
    "pages": "123",
    "read": true
}));