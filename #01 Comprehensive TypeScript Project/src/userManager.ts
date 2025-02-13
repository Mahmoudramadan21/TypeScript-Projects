import { User } from "./user";
import { Library } from "./library";

export class UserManager {
    private users: User[] = [];
    private library: Library;

    constructor(library: Library) {
        this.library = library;
    }

    addUser(id: number, name: string): void {
        this.users.push({ id, name, borrowedBooks: [] });
    }

    removeUser(userId: number) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    borrowBook(userId: number, bookId: number): void {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found!");
            return;
        }

        if (this.library.borrowBook(bookId)) {
            user.borrowedBooks.push(bookId);
            console.log(`${user.name} borrowed a book`);
        } else {
            console.log("Book is not available");
        }
    }

    returnBook(userId: number, bookId: number): void {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found.");
            return;
        }

        if (user.borrowedBooks.includes(bookId)) {
            this.library.returnBook(bookId);
            user.borrowedBooks.filter(id => id !== bookId);
            console.log(`${user.name} returned the book.`);
        } else {
            console.log("User did not borrow this book.");
        }
    }

    listBorrowedBooks(userId: number): void {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            console.log("User not found.");
            return;
        }

        console.log(`${user.name}'s Borrowed Books: ${user.borrowedBooks}`);
    }
}