//Create classes to create, store, and retrieve books

class Bookstore {
  constructor(name){
    this.name = name
    this.books = [];
  }
  storeBook(book){
    this.books.push(book)
  }
  getBook(title){
    
    for(let book of this.books){
      if(book.title === title){
        return book
      } else {
        return false
      }
    }      
    }    
    
  getAllBooks(){
    return this.books
  }
  // your code here
}

class Book {
  constructor(title, quantity){
    this.title = title
    this.quantity = quantity
  }
  changeTitle(title) {
    this.title = title
  }
}














/* Environment setup. Do not modify the below code. */
/****************************************************/
module.exports = { Bookstore, Book };
/****************************************************/

