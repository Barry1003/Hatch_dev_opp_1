"use strict";
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books;
    }
    create() {
        console.log(`${this.name}, Welcome to Iutechi Library\nHere is a list of all the books in our library:\n\n${this.books.join("\n")}`);
    }
    checkAvailability(bookName) {
        const unavailableBooks = ["Book 3", "Book 4"];
        if (unavailableBooks.includes(bookName)) {
            console.log(`${bookName} is NOT available 😔😔 Please check back later.`);
        }
        else {
            console.log(`${bookName} is available 👍👍  Happy reading 😊😊`);
        }
    }
}
const lib = new Library("Usaamah", ["Book 1", "Book 2", "Book 3"]);
lib.create();
lib.checkAvailability("Book 1");
lib.checkAvailability("Book 3");
