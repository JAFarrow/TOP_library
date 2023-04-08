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