// function greet(name: string): void {
//     console.log(`Hello, ${name}`);
// }

// greet("Aakash");





// // return types 
// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(10, 20));



// // arrow function 
// const multiply = (a: number, b: number): number => {
//     return a * b;
// };

// console.log(multiply(4, 5));



// //Optional Parameter
// function welcome(name: string, city?: string) {
//     if (city) {
//         console.log(`${name} from ${city}`);
//     } else {
//         console.log(name);
//     }
// }

// welcome("Aakash");
// welcome("Aakash", "bhadohi");





// //Default Parameter
// function greetUser(name: string = "Guest") {
//     console.log(`Welcome ${name}`);
// }

// greetUser();
// greetUser("Aakash");



//Rest Parameters
// function total(...numbers: number[]): number {
//     return numbers.reduce((sum, n) => sum + n, 0);
// }

// console.log(total(10, 20, 30));
// console.log(total(5, 5, 5, 5));