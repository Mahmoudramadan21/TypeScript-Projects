"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor(library) {
        this.users = [];
        this.library = library;
    }
    addUser(id, name) {
        this.users.push({ id, name, borrowedBooks: [] });
    }
    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }
    borrowBook(userId, bookId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found!");
            return;
        }
        if (this.library.borrowBook(bookId)) {
            user.borrowedBooks.push(bookId);
            console.log(`${user.name} borrowed a book`);
        }
        else {
            console.log("Book is not available");
        }
    }
    returnBook(userId, bookId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found.");
            return;
        }
        if (user.borrowedBooks.includes(bookId)) {
            this.library.returnBook(bookId);
            user.borrowedBooks.filter(id => id !== bookId);
            console.log(`${user.name} returned the book.`);
        }
        else {
            console.log("User did not borrow this book.");
        }
    }
    listBorrowedBooks(userId) {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found.");
            return;
        }
        console.log(`${user.name}'s Borrowed Books: ${user.borrowedBooks}`);
    }
}
exports.UserManager = UserManager;
