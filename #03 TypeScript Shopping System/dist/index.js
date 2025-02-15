"use strict";
// Define categories for products using enum
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Clothing"] = "Clothing";
    Category["Books"] = "Books";
})(Category || (Category = {}));
// Define order status using enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// Abstract class for payment with an abstract method `processPayment`
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
// Credit card payment implementation
class CreditCardPayment extends Payment {
    processPayment() {
        console.log(`Processing Credit Card Payment: $${this.amount}`);
    }
}
// PayPal payment implementation
class PayPalPayment extends Payment {
    processPayment() {
        console.log(`Processing PayPal Payment: $${this.amount}`);
    }
}
// Generic class to manage inventory of any type of items
class Inventory {
    constructor() {
        this.items = [];
    }
    // Add an item to the inventory
    addItem(item) {
        this.items.push(item);
    }
    // Get an item by index
    getItem(index) {
        return this.items[index];
    }
    // Get all items in the inventory
    getAllItems() {
        return this.items;
    }
}
// User class to manage user details and shopping cart
class User {
    constructor(id, name, email, cart = [] // Initialize an empty cart
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cart = cart;
    }
    // Add a product to the user's cart
    addToCart(product) {
        this.cart.push(product);
        console.log(`${product.name} added to cart.`);
    }
    // Calculate the total price of items in the cart
    checkout() {
        const total = this.cart.reduce((sum, product) => sum + product.price, 0);
        console.log(`Total price: $${total}`);
        return total;
    }
}
// Test the system
// Create an inventory of products
const inventory = new Inventory();
inventory.addItem({
    id: 1,
    name: "Laptop",
    price: 1000,
    category: Category.Electronics,
});
inventory.addItem({
    id: 2,
    name: "T-Shirt",
    price: 120,
    category: Category.Clothing,
});
// Create a user
const user = new User(1, "Mahmoud", "Mahmoud@example.com");
// Add products to the user's cart
user.addToCart(inventory.getItem(0)); // Laptop added to cart
user.addToCart(inventory.getItem(1)); // T-Shirt added to cart
// Calculate the total price and checkout
const total = user.checkout(); // Total price: $1120
// Process payment using credit card
const payment = new CreditCardPayment(total);
payment.processPayment(); // Processing Credit Card Payment: $1120
// Create an order
const order = [1, user.cart, total, OrderStatus.Pending];
console.log(order); // [1, [Product], 1120, "Pending"]
