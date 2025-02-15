# TypeScript Shopping System

## Overview
This project is a simple shopping system implemented in TypeScript. It includes functionality for managing products, orders, payments, and user shopping carts using TypeScript's features like enums, types, tuples, abstract classes, and generics.

## Features
- **Product Management**: Define products with categories, pricing, and optional attributes.
- **User Cart**: Users can add products to their cart and checkout.
- **Order Management**: Track order status using an enum.
- **Payments**: Abstract payment system supporting Credit Card and PayPal payments.
- **Inventory System**: Generic class for managing inventory.

## Technologies Used
- TypeScript

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Mahmoudramadan21/TypeScript-Projects.git
   ```
2. Navigate to the project directory:
   ```sh
   cd "#03 TypeScript Shopping System"
   ```
3. Install dependencies (if applicable):
   ```sh
   npm install
   ```

## Usage
1. Compile the TypeScript files:
   ```sh
   tsc
   ```
2. Run the compiled JavaScript file:
   ```sh
   node dist/index.js
   ```

## Example Code
```typescript
// Create an inventory of products
const inventory = new Inventory<Product>();
inventory.addItem({
    id: 1,
    name: "Laptop",
    price: 1000,
    category: Category.Electronics,
});

// Create a user and add products to the cart
const user = new User(1, "Mahmoud", "Mahmoud@example.com");
user.addToCart(inventory.getItem(0));

// Checkout and process payment
const total = user.checkout();
const payment = new CreditCardPayment(total);
payment.processPayment();
```

## License
This project is licensed under the MIT License.
