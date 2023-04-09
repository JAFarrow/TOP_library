const formToggle = document.getElementById('addBookBtn');
const additionOverlay = document.getElementById('inputOverlay')

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
    this.info = function() {
        let readStatus = (this.read ? 'Read' : 'Not Read');
        return `${this.title} by ${this.author}. ${this.pages} pages. ${readStatus}.`;
    }
};

formToggle.addEventListener('click', () => {
    additionOverlay.classList.remove('inputBoxHide');
    additionOverlay.classList.add('inputBoxShow');
});