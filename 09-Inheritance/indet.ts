// ======================================= 
// TypeScript Inheritance (Complete Example)
// ======================================= 

// Inheritance ka matlab hai:
// Ek Child Class, Parent Class ke properties aur methods ko reuse kar sakti hai.

// -------------------------------
// 1. Parent Class
// -------------------------------

class Animal {
  // Constructor me public likhne se property automatically ban jaati hai
  constructor(public name: string) {}

  // Parent ka method
  sound() {
    console.log("Animal makes a sound");
  }
}

// -------------------------------
// 2. Child Class using extends
// -------------------------------

class Dog extends Animal {
  // Child ka apna method
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// Object create kiya
const dog = new Dog("Tommy");

console.log("=== Basic Inheritance ===");
dog.sound(); // Parent method
dog.bark();  // Child method

// Output:
// Animal makes a sound
// Tommy says Woof!

// ------------------------------------
// 3. super() Example
// ------------------------------------

// Parent Class
class Vehicle {
  constructor(public brand: string) {}
}

// Child Class
class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    // Parent constructor ko call karna zaroori hai
    super(brand);
  }

  details() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car = new Car("Toyota", "Fortuner");

console.log("\n=== super() Example ===");
car.details();

// Output:
// Toyota Fortuner

// ------------------------------------
// 4. Method Overriding
// ------------------------------------

class Bird {
  sound() {
    console.log("Bird makes a sound");
  }
}

class Parrot extends Bird {
  // Parent wale method ko replace kar diya
  override sound() {
    console.log("Parrot says Hello!");
  }
}

const parrot = new Parrot();

console.log("\n=== Method Overriding ===");
parrot.sound();

// Output:
// Parrot says Hello!

// ------------------------------------
// 5. Protected Example
// ------------------------------------

class Person {
  // Protected property sirf class aur child class use kar sakti hai
  protected name = "Aakash";
}

class Student extends Person {
  showName() {
    console.log(`Student Name: ${this.name}`);
  }
}

const student = new Student();

console.log("\n=== Protected Example ===");
student.showName();

// Bahar se ye error dega:
// console.log(student.name);

// ------------------------------------
// 6. Real Project Example
// ------------------------------------

// Base API Service
class ApiService {
  constructor(public baseUrl: string) {}

  get(endpoint: string) {
    return `${this.baseUrl}/${endpoint}`;
  }
}

// User Service Parent ko inherit kar rahi hai
class UserService extends ApiService {
  getUsers() {
    return this.get("users");
  }
}

const userService = new UserService("https://api.example.com");

console.log("\n=== Real Project Example ===");
console.log(userService.getUsers());

// Output:
// https://api.example.com/users

// =======================================
// Interview Revision
// =======================================

// extends  -> Parent Class ko inherit karta hai.
// super()  -> Parent constructor ko call karta hai.
// override -> Parent method ko replace karta hai.
// protected -> Child Class access kar sakti hai.
// private -> Sirf same class access kar sakti hai.