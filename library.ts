class Library {
  public name: string;
  public readonly books: string[];

  constructor(name: string, books: string[]) {
    this.name = name;
    this.books = books;
  }

  create(): void {
    console.log(`${this.name}, Welcome to Iutechi Library\nHere is a list of all the books in our library:\n\n${this.books.join("\n")}`);
  }

  checkAvailability(bookName: string): void {
    const unavailableBooks = ["Book 3", "Book 4"];

    if (unavailableBooks.includes(bookName)) {
      console.log(`${bookName} is NOT available 😔😔 Please check back later.`);
    } else {
      console.log(`${bookName} is available 👍👍  Happy reading 😊😊`);
    }
  }
}

const lib = new Library("Usaamah", ["Book 1", "Book 2", "Book 3"]);

lib.create();
lib.checkAvailability("Book 1");
lib.checkAvailability("Book 3");