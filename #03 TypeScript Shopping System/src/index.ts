// Define categories for products using enum
enum Category {
    Electronics = "Electronics",
    Clothing = "Clothing",
    Books = "Books",
}

// Define the structure of a product using type
type Product = {
    id: number;
    name: string;
    price: number;
    category?: Category; // Optional category
};

// Define a discount type that can be either percentage or fixed amount
type Discount =
    | { type: "percentage"; value: number }
    | { type: "fixed"; value: number };

// Define order status using enum
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
}

// Define an order as a tuple containing order ID, products, total price, and status
type Order = [number, Product[], number, OrderStatus];

// Abstract class for payment with an abstract method `processPayment`
abstract class Payment {
    constructor(public amount: number) { }
    abstract processPayment(): void;
}

// Credit card payment implementation
class CreditCardPayment extends Payment {
    processPayment(): void {
        console.log(`Processing Credit Card Payment: $${this.amount}`);
    }
}

// PayPal payment implementation
class PayPalPayment extends Payment {
    processPayment(): void {
        console.log(`Processing PayPal Payment: $${this.amount}`);
    }
}

// Generic class to manage inventory of any type of items
class Inventory<T> {
    private items: T[] = [];

    // Add an item to the inventory
    addItem(item: T) {
        this.items.push(item);
    }

    // Get an item by index
    getItem(index: number): T {
        return this.items[index];
    }

    // Get all items in the inventory
    getAllItems(): T[] {
        return this.items;
    }
}

// User class to manage user details and shopping cart
class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public cart: Product[] = [] // Initialize an empty cart
    ) { }

    // Add a product to the user's cart
    addToCart(product: Product): void {
        this.cart.push(product);
        console.log(`${product.name} added to cart.`);
    }

    // Calculate the total price of items in the cart
    checkout(): number {
        const total = this.cart.reduce((sum, product) => sum + product.price, 0);
        console.log(`Total price: $${total}`);
        return total;
    }
}

// Test the system

// Create an inventory of products
const inventory = new Inventory<Product>();
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
const order: Order = [1, user.cart, total, OrderStatus.Pending];
console.log(order); // [1, [Product], 1120, "Pending"]