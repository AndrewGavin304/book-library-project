let myLibrary = [];

class Book {
  constructor(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
  }
}

addBookToLibrary = () => {
  title = prompt('What is the book\'s title?')
  author =  prompt('What is the book\'s author\'s name?')
  pages = prompt('How many pages is the book?')
  beenRead = prompt('Have you read it?')
  myLibrary.push(new Book(title, author, pages, beenRead));
  createCard(myLibrary[myLibrary.length - 1])
}

showAddBookForm = () => {
  const addBookForm = document.querySelector(".form-wrapper");
  if (addBookForm.style.display === 'none') {
    addBookForm.style.display = 'flex';
  }
  else {
    addBookForm.style.display = 'none';
  }

}

const addBookBtn = document.querySelector(".add-book-wrapper__btn");
addBookBtn.addEventListener('click', showAddBookForm);

myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))
myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))

function initializeLibrary() {
  myLibrary.forEach(book => createCard(book));
}

function createCard(book) {
  let library = document.querySelector(".library");
  const newDiv = document.createElement("div");
  newDiv.classList.add('library__card');
  library.appendChild(newDiv);

  const cardHeader = document.createElement("span");
  cardHeader.textContent = book.title;
  cardHeader.classList.add('library__title');
  newDiv.appendChild(cardHeader);

  const cardSubHeader = document.createElement("span");
  cardSubHeader.textContent = book.author;
  cardSubHeader.classList.add('library__author');
  newDiv.appendChild(cardSubHeader);

  const cardBookLength = document.createElement("span");
  cardBookLength.textContent = `${book.pages} pages`;
  cardBookLength.classList.add('library__pages');
  newDiv.appendChild(cardBookLength);

  // const cardReadNotifier = document.createElement("span")
  // cardReadNotifier.textContent = book.beenRead;
  // cardReadNotifier.classList.add('')
}