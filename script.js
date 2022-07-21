let myLibrary = [];

class Book {
  constructor(title, author, pages, beenRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
    this.id = id;
  }
}

addBookToLibrary = (myLibrary) => {
  const title = document.querySelector('.title-input').value
  const author =  document.querySelector('.author-input').value
  const pages = document.querySelector('.pages-input').value
  const beenRead = true;
  const id = Date.now()
  myLibrary.push(new Book(title, author, pages, beenRead, id));
  console.log(myLibrary)
  console.log(myLibrary.length)
  createCard(myLibrary[myLibrary.length-1])
  showAddBookForm()
  clearAddBookForm()
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

clearAddBookForm = () => {
  document.querySelector('.title-input').value = ''
  document.querySelector('.author-input').value = ''
  document.querySelector('.pages-input').value = ''
}

function initializeLibrary() {
  myLibrary.forEach(book => createCard(book));
}

deleteBookFromArray = (id) => {
  const newArray = myLibrary.filter(book => book.id != id);
  myLibrary = newArray;
}

deleteBookFromDisplay = (id) => {}

function createCard(book) {
  let library = document.querySelector(".library");

  const outerDiv = document.createElement("div");
  outerDiv.classList.add('library__card-outer')
  library.appendChild(outerDiv);

  const innerDiv = document.createElement("div");
  innerDiv.classList.add('library__card-inner');
  outerDiv.appendChild(innerDiv)

  const cardHeader = document.createElement("span");
  cardHeader.textContent = book.title;
  cardHeader.classList.add('library__title');
  innerDiv.appendChild(cardHeader);

  const cardSubHeader = document.createElement("span");
  cardSubHeader.textContent = book.author;
  cardSubHeader.classList.add('library__author');
  innerDiv.appendChild(cardSubHeader);

  const cardBookLength = document.createElement("span");
  cardBookLength.textContent = `${book.pages} pages`;
  cardBookLength.classList.add('library__pages');
  // innerDiv.appendChild(cardBookLength);

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", function (){
    deleteBookFromArray(book.id)
  });

  deleteBtn.classList.add('btn', 'library__delete-book');
  library.appendChild(deleteBtn);
  // CALL DELETE FUNCTION ON BTN

  const read = document.querySelector('.read-input')
  if (read.checked) {
    const readIndicator = document.createElement("div");
    readIndicator.classList.add('library__card-read');
    outerDiv.appendChild(readIndicator);
  }
}



const addBookBtn = document.querySelector(".header__new-book");
addBookBtn.addEventListener('click', showAddBookForm);

myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))

initializeLibrary();