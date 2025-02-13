# 📚 Library Management System (TypeScript)
A simple library management system built using TypeScript. It allows users to add books, borrow, return, and manage users.

## 🚀 Features
- Add and remove books from the library
- Borrow and return books
- Search for books by title or author
- Manage users and track borrowed books

## 🛠️ Project Structure
```
library-management-system/
│── src/
│   ├── book.ts         # Book interface
│   ├── library.ts      # Library class (book management)
│   ├── user.ts         # User interface
│   ├── userManager.ts  # User management system
│   ├── index.ts        # Main entry point
│── dist/               # Compiled JavaScript files
│── tsconfig.json       # TypeScript config
│── package.json        # Project dependencies
│── README.md           # Project documentation
```

## 🛠️ Setup
### **1. Install TypeScript**
```sh
npm install -g typescript
```

### **2. Compile TypeScript**
```sh
tsc
```

### **3. Run the project**
```sh
node dist/index.js
```

## 📌 Example Output
```
📚 Listing all books:
1: The TypeScript Handbook by Anders Hejlsberg - Available
2: Clean Code by Robert C. Martin - Available
...

👤 User borrowing books:
👉 Mahmoud borrowed a book.
👉 Mahmoud borrowed a book.
...

🔄 User returning a book:
Mahmoud returned the book.
...
```
🚀 Happy Coding!
