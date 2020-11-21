const myLibrary = [];
const library = document.querySelector(".library");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length;
    this.info = function () {
        return (this.title + ", by " + this.author + ", " + this.pages + ", " + this.read);
    }
}

function addBookToLibrary() {

    var newBook = new Book();
    bookAttr(newBook);
    displayBooks();
}

function bookAttr(newBook) {
    newBook.title = prompt("What is the title of the Book?");
    newBook.author = prompt(`Who wrote ${newBook.title}?`);
    newBook.pages = prompt(`How many pages are in ${newBook.title}?`);
    newBook.read = prompt(`Have you read ${newBook.title} yet?`);
    myLibrary.push(newBook);
}

function displayBooks() {
    library.innerHTML = "";
    for (var i = 0; i < myLibrary.length; i++) {
        var book = myLibrary[i]
        var bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        var bookTitle = document.createElement("div");
        bookTitle.classList.add("bookTitle");
        bookTitle.innerText = (`Title: ${book.title}`)
        var bookAuthor = document.createElement("div");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.innerText = (`Author: ${book.author}`)
        var bookPages = document.createElement("div");
        bookPages.classList.add("bookPages");
        bookPages.innerText = (`${book.pages} pages`)
        var readYet = document.createElement("div");
        readYet.classList.add("readYet");
        readYet.innerText = (`Read? ${book.read}`)
        var removeBook = document.createElement("div");
        removeBook.classList.add("removeBook");
        var toggleRead = document.createElement("button");
        toggleRead.classList.add("bookButton")
        toggleRead.innerText = ("Press to change read status");



        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readYet);
        bookCard.appendChild(removeBook);
        bookCard.appendChild(toggleRead);
        library.appendChild(bookCard);

    }
    addRemove();
    addToggle();
    return;
}

function addRemove() {
    var elements = document.querySelectorAll(".removeBook");

    elements.forEach((element, index) => {
        element.addEventListener('click', () => {
            remove(index);
        });
    })
}

function remove(element) {
    myLibrary.splice(element, 1);
    displayBooks();
}

function addToggle(){
    var elements = document.querySelectorAll(".bookButton");

    elements.forEach((element, index) => {
        element.addEventListener('click', () =>{
            toggleRead(index);
        })
    })
}

function toggleRead(i){
    var elements = document.querySelectorAll(".readYet");

    if (elements[i].innerText === ("Read? Yes")){
        elements[i].innerText = "Read? No";
    } else elements[i].innerText = "Read? Yes";
}

function init() {
    var book = new Book("The Hobbit", "J.R.R Tolkien", "295 Pages", "Yes");
    myLibrary.push(book);
    var book2 = new Book("East of Eden", "John Stienbeck", "601", "Yes")
    myLibrary.push(book2);
    displayBooks();
    return
}


init();

