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
}

myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))
myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))
myLibrary.push(new Book('Infinite Jest', 'David Foster Wallace', '852', 'Yes'))

function showLibrary() {
  myLibrary.forEach(book => createCard(book));
}

function createCard(book) {
  const newDiv = document.createElement("div")
  newDiv.classList.add('display__card')

  const cardHeader = document.createElement("h1")
  cardHeader.textContent = book.title;
  cardHeader.classList.add('display__title')

  const cardSubHeader = document.createElement("h2")
  cardSubHeader.textContent = book.author;
  cardSubHeader.classList.add('display__author')

  const cardLengthDisplay = document.createElement("span")
  cardLengthDisplay.textContent = book.pages;
  cardLengthDisplay.classList.add('display__pages')

  // const cardReadNotifier = document.createElement("span")
  // cardReadNotifier.textContent = book.beenRead;
  // cardReadNotifier.classList.add('')
}