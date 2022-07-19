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

// function showLibrary() {
//   myLibrary.forEach(book => ADD_IT_TO_THE_DISPLAY)
// }