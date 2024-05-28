const myLibrary = [{title: "Ejemplo", author: "Yo mismo", pages: 555}];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

document.onload = render();

function addBookToLibrary(e) {
  e.preventDefault();
  const books = document.getElementById("books");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const createdBook = new Book(title, author, pages);
  myLibrary.push(createdBook);
  render();
}

function render() {
  const books = document.getElementById("bookList");
  books.innerText = "";

  myLibrary.forEach(b => {
    const book = document.createElement("tr");
    const bookTitle = document.createElement("td");
    bookTitle.textContent = b.title;
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = b.author;
    const bookPages = document.createElement("td");
    bookPages.textContent = b.pages;
    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);
    books.appendChild(book);
  })
}

const newBook = document.getElementById("newBook");
newBook.onsubmit = (e) => addBookToLibrary(e);
