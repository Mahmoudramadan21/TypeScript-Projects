import { Library } from "./library";
import { UserManager } from "./userManager";

const myLibrary = new Library();
myLibrary.addBook(
    { id: 1, title: "The TypeScript Handbook", author: "Anders Hejlsberg", isAvailable: true },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", isAvailable: true },
    { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", isAvailable: true }
);

const userManager = new UserManager(myLibrary);
userManager.addUser(1, "Mahmoud");

console.log("\n📚 Listing all books:");
myLibrary.listBooks();

console.log("\n👤 User borrowing books:");
userManager.borrowBook(1, 1);
userManager.borrowBook(1, 2);

console.log("\n📌 User's borrowed books:");
userManager.listBorrowedBooks(1);

console.log("\n📚 Books after borrowing:");
myLibrary.listBooks();

console.log("\n🔄 User returning a book:");
userManager.returnBook(1, 1);

console.log("\n📌 User's borrowed books after return:");
userManager.listBorrowedBooks(1);

console.log("\n📚 Books after return:");
myLibrary.listBooks();
