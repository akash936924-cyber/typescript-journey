// class Person {
//   name: string = "Aakash";
// }

// const p1 = new Person();
// console.log(p1.name);





//2. Constructor
// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const p1 = new Person("Aakash");
// console.log(p1.name);




// //3. Method
// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const p1 = new Person("Aakash");
// p1.greet();











//Private
// class Person {
//   private password = "1234";

//   showPassword() {
//     console.log(this.password);
//   }
// }

// const p = new Person();
// // p.password ❌ Error






// //Protected
// class Animal {
//   protected name = "Dog";
// }

// class Dog extends Animal {
//   show() {
//     console.log(this.name);
//   }
// }




//Shortcut Constructor
// class Person {
//   constructor(public name: string, public age: number) {}
// }

// const p = new Person("Aakash", 21);

// console.log(p.name);
// console.log(p.age);












//6. Readonly
// // ApiConfig naam ki class banayi
// class ApiConfig {

//   // Constructor object bante hi call hota hai
//   // public likhne se baseUrl aur timeout automatic properties ban jaati hain
//   constructor(
//     public baseUrl: string,
//     public timeout: number
//   ) {}

//   // Ye method URL ke end me path add karke complete URL return karta hai
//   getUrl(path: string) {
//     return `${this.baseUrl}/${path}`;
//   }
// }

// // Class ka object (instance) banaya
// const api = new ApiConfig("https://api.example.com", 5000);

// // Method ko call kiya
// console.log(api.getUrl("users"));
