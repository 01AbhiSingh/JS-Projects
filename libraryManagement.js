class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true // availanle to be borrowed
    }

    borrowBook(){
        if(this.available){
            this.available = false;
            console.log(`book"${this.title}" has been borrowed`);
        }
        else{
            console.log(`book"${this.title}" is not available`)
        }
    }

    returnBook(){
        this.available = true;
        console.log(`book "${this.title}" has been returned`)
    }
}

class Member{
    constructor(name, id){
        this.name = name;
        this.id = id;

        this.borrowedBooks = []
    }

    borrowBook(book){
        if(book.available){
            this.borrowedBooks.push(book);
            book.borrowBook();
            console.log(`${this.name} has borrowed "${book.title}"`);
        }
        else{
            console.log(`sorry, "${book.title}" is not available`);
        }
    }
    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);
        if(index !== -1){
            this.borrowedBooks.splice(index,1);
            book.returnBook();
            console.log(`${this.name} has returned "${book.title}"`)

        }
        else{
            console.log(`${this.name} didn't borrowed "${book.title}"`)
        }
    }
}

class Library{
    constructor(){
        this.members = []
        this.books = []
    }

    addBook(book){
        this.books.push(book);
        console.log(`"${book.title}" has been added to the lib`);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if(index !== -1){
            this.books.splice(index, 1);
            console.log(`book "${book.title}" has been removed from the lib`);
        }
        else {
            console.log(`Book "${book.title}" is not in the library.`);
          }
    }
    addMember(member) {
        this.members.push(member);
        console.log(`Member "${member.name}" has been added to the library.`);
      }
    
      // Method to remove a member from the library
      removeMember(member) {
        const index = this.members.indexOf(member);
        if (index !== -1) {
          this.members.splice(index, 1);
          console.log(`Member "${member.name}" has been removed from the library.`);
        } else {
          console.log(`Member "${member.name}" is not in the library.`);
        }
      }

      issueBook(member, book) {
        if (this.books.includes(book) && this.members.includes(member)) {
          member.borrowBook(book);
        } else {
          console.log("Book or member not found in the library.");
        }
      }
    
      // Method to return a book from a member
      returnBook(member, book) {
        if (this.books.includes(book) && this.members.includes(member)) {
          member.returnBook(book);
        } else {
          console.log("Book or member not found in the library.");
        }
      }

}

// Create some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("1984", "George Orwell", "9780451524935");

// Create some members
const member1 = new Member("Alice", 1);
const member2 = new Member("Bob", 2);

// Create a library
const library = new Library();

// Add books and members to the library
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.addMember(member2);

// Issue books to members
library.issueBook(member1, book1); // Alice borrows The Great Gatsby
library.issueBook(member2, book2); // Bob borrows 1984

// Try to issue an already borrowed book
library.issueBook(member1, book2); // Fails because 1984 is already borrowed

// Return a book
library.returnBook(member1, book1); // Alice returns The Great Gatsby

// Remove a book and a member
library.removeBook(book1);
library.removeMember(member1);