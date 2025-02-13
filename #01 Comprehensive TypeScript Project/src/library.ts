import { Book } from "./book";

export class Library {
    private books: Book[] = [];

    addBook(...newBook: Book[]): void {
        this.books.push(...newBook);
    }

    listBooks(): void {
        console.log("Available Books:");
        this.books.forEach((book) => {
            console.log(`${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Not Available"}`)
        })
    }

    findBook(titleOrAuthor: string): Book | undefined {
        return this.books.find(book => book.title.includes(titleOrAuthor) || book.author.includes(titleOrAuthor));
    }

    removeBook(bookId: number): void {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    borrowBook(bookId: number): boolean {
        const book = this.books.find(book => book.id === bookId);
        if (book && book.isAvailable) {
            book.isAvailable = false;
            return true;
        }
        return false;
    }

    returnBook(bookId: number): void {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            book.isAvailable = true;
        }
    }
}