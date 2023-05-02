const formToggle = document.getElementById('addBookBtn');
const additionOverlay = document.getElementById('inputOverlay')
const mainPage = document.querySelector('main');

const bookTitleInput = document.getElementById('bookTitle');
const bookAuthorInput = document.getElementById('bookAuthor');
const bookPagesInput = document.getElementById('bookPages');
const bookReadInput = document.getElementById('bookReadSlider');
const closeOverlayButton = document.getElementById('closeOverlay');
const submitBtn = document.getElementById('submitBtn');

let myLibrary = [];

myLibrary.push(new book('Thus Spoke Zarathustra', 'Friedrich Nietzsche', '254', false));

function displayLib() {
    for (i = 0; i < myLibrary.length; i++) {
        cardPush(cardCreation(myLibrary[i], i));
    };
};


displayLib();

function clearDisplay() {
    let allCards = document.querySelectorAll('.bookCard');
    allCards.forEach((card) => { card.remove() });
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

function createCheckboxSlider(state, ind) {
    let checkboxContainer = document.createElement('div');
    let checkbox = document.createElement('input');
    let checkboxId = `cardCheckbox${ind}`;
    checkbox.type = 'checkbox';
    checkbox.name = checkboxId;
    checkbox.id = checkboxId;
    if (state == true) {
        checkbox.checked = 'checked';
    }
    checkbox.classList.add('slider');
    checkboxContainer.appendChild(checkbox);
    let checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = checkboxId;
    checkboxLabel.textContent = 'Read?'
    checkboxContainer.appendChild(checkboxLabel);
    checkbox.addEventListener('click', () => {
        if (myLibrary[ind].read == true) {
            myLibrary[ind].read = false;
        } else {
            myLibrary[ind].read = true;
        };
    });
    return checkboxContainer;
}

function cardCreation(obj, ind) {

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

    cardDiv.appendChild(createCheckboxSlider(obj.read, ind));

    let deleteButton = document.createElement('button');
    deleteButton.id = `libraryPosition${ind}`;
    deleteButton.textContent = 'Remove Book From Library';
    deleteButton.classList.add('cardDeleteButton');
    deleteButton.addEventListener('click', () => {
        let position = deleteButton.id.replace(/^\D+/g, '');
        myLibrary.splice(position, 1);
        clearDisplay();
        displayLib();
    })
    cardDiv.appendChild(deleteButton);

    return cardDiv;
};

function cardPush(card) {
    mainPage.appendChild(card);
}

submitBtn.addEventListener('click', (event) => {
    myLibrary.push(new book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookReadInput.checked));
    additionOverlay.classList.remove('inputBoxShow');
    additionOverlay.classList.add('inputBoxHide');
    event.preventDefault();
    clearDisplay();
    displayLib();
}, false);

closeOverlayButton.addEventListener('click', (event) => {
    event.preventDefault();
    additionOverlay.classList.remove('inputBoxShow');
    additionOverlay.classList.add('inputBoxHide');
}, false);

