// 1️⃣ Interface for User Structure
interface BaseUser {
    readonly id: number,
    username: string,
    email: string,
    country?: string,
    displayInfo(): string
}

// 2️⃣ Extending the Interface for Admins
interface Admin extends BaseUser {
    role: "Admin" | "Moderator" | "User",
    manageUsers(): string
}

// 3️⃣ User Class with Access Modifiers & Getters/Setters
class User implements BaseUser {
    public static count: number = 0 // Static property to track users count

    public readonly id: number;
    public username: string;
    public email: string;
    private _country?: string;

    constructor(username: string, email: string, country?: string) {
        this.id = ++User.count;
        this.username = username;
        this.email = email;
        this._country = country;
    }

    // Getter & Setter for Country
    get country(): string {
        return this._country || "Not specicified";
    }
    set(value: string): void {
        this._country = value;
    }

    // Display user info
    displayInfo(): string {
        return `User [ID: ${this.id} - ${this.username}, Email: ${this.email}, Country: ${this.country}]`;
    }

    // Static method to get total users
    static getTotalUsers(): number {
        return User.count;
    }

}

// 4️⃣ Admin Class Extending User & Implementing Admin Interface
class AdminUser extends User implements Admin {

    public role: "Admin" | "Moderator" | "User";
    constructor(username: string, email: string, role: "Admin" | "Moderator" | "User", country: string) {
        super(username, email, country);
        this.role = role;
    }

    manageUsers(): string {
        return `Admin ${this.username} is manging users.`;
    }

    // Override displayInfo to add role
    displayInfo(): string {
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
