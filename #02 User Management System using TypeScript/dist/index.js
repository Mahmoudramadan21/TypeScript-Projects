"use strict";
// 3️⃣ User Class with Access Modifiers & Getters/Setters
class User {
    constructor(username, email, country) {
        this.id = ++User.count;
        this.username = username;
        this.email = email;
        this._country = country;
    }
    // Getter & Setter for Country
    get country() {
        return this._country || "Not specicified";
    }
    set(value) {
        this._country = value;
    }
    // Display user info
    displayInfo() {
        return `User [ID: ${this.id} - ${this.username}, Email: ${this.email}, Country: ${this.country}]`;
    }
    // Static method to get total users
    static getTotalUsers() {
        return User.count;
    }
}
User.count = 0; // Static property to track users count
// 4️⃣ Admin Class Extending User & Implementing Admin Interface
class AdminUser extends User {
    constructor(username, email, role, country) {
        super(username, email, country);
        this.role = role;
    }
    manageUsers() {
        return `Admin ${this.username} is manging users.`;
    }
    // Override displayInfo to add role
    displayInfo() {
        return `${super.displayInfo()} - Role: ${this.role}`;
    }
}
// 5️⃣ Testing the System
const user1 = new User("Mahmoud", "mahmoud@example.com", "Egypt");
const user2 = new User("Ahmed", "ahmed@example.com");
const admin1 = new AdminUser("Mohamed", "mohamed@example.com", "Admin", "Egypt");
console.log(user1.displayInfo());
console.log(user2.displayInfo());
console.log(admin1.displayInfo());
console.log(admin1.manageUsers());
console.log(`Total Users Created: ${User.getTotalUsers()}`);
