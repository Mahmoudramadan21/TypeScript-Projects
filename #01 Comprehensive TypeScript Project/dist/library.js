"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(...newBook) {
        this.books.push(...newBook);
    }
    listBooks() {
        console.log("Available Books:");
        this.books.forEach((book) => {
            console.log(`${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Not Available"}`);
        });
    }
    findBook(titleOrAuthor) {
        return this.books.find(book => book.title.includes(titleOrAuthor) || book.author.includes(titleOrAuthor));
    }
    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }
    borrowBook(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            return true;
        }
        return false;
    }
    returnBook(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            book.isAvailable = true;
        }
    }
}
exports.Library = Library;
