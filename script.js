const formToggle = document.getElementById('addBookBtn');
const additionOverlay = document.getElementById('inputOverlay')
const mainPage = document.querySelector('main');

const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookPagesInput = document.getElementById('bookPages');
const bookReadInput = document.getElementById('bookReadSlider');
const submitBtn = document.getElementById('submitBtn');

let myLibrary = [];

myLibrary.push(new book('Thus Spoke Zarathustra', 'Friedrich Nietzsche', '254', false));

function displayLib () {
    for (i= 0; i < myLibrary.length; i++) {
        cardPush(cardCreation(myLibrary[i], i));
    }
};


displayLib();

function clearLib () {
    let allCards = document.querySelectorAll('.bookCard');
    allCards.forEach((card) => {card.remove()});
};

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

function cardCreation (obj, ind) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('bookCard');
    cardDiv.id = `card${ind}`;
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = obj.title;
    cardDiv.appendChild(bookTitle);
    let bookAuthor = document.createElement('h3');
    bookAuthor.textContent = obj.author;
    cardDiv.appendChild(bookAuthor);
    let bookPages = document.createElement('p');
    bookPages.textContent = obj.pages;
    cardDiv.appendChild(bookPages);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove Book';
    deleteButton.classList.add('cardDeleteButton');
    cardDiv.appendChild(deleteButton);
    return cardDiv; 
};

function cardPush (card) {
    mainPage.appendChild(card);
}

function customSubmit(event) {
    myLibrary.push(new book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookReadInput.checked));
    additionOverlay.classList.remove('inputBoxShow');
    additionOverlay.classList.add('inputBoxHide');
    event.preventDefault();
    clearLib();
    displayLib();
}

submitBtn.addEventListener('click', customSubmit, false);