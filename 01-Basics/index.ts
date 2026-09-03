// Variables

// let firstName: string = "Aakash";
// let age: number = 21;
// let isStudent: boolean = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);


// Day 1 - Variables & Basic Types

// let firstName: string = "Aakash";
// let age: number = 21;
// let isStudent: boolean = true;

// console.log("Name:", firstName);
// console.log("Age:", age);
// console.log("Student:", isStudent);

// // let vs const

// let city: string = "Lucknow";
// city = "Delhi";

// const country: string = "India";

// // country = "USA"; // Error

// console.log("City:", city);
// console.log("Country:", country);

// // Type Inference

// let company = "Microsoft";
// console.log("Company:", company);



// Any (avoid in real projects)



let data: any = "Hello";
data = 100;
console.log("Any:", data);

// Unknown (safer)

let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log("Unknown:", value.toUpperCase());
}

// Null and Undefined

let empty: null = null;
let notAssigned: undefined = undefined;

console.log(empty);
console.log(notAssigned);

// Void

function greet(): void {
    console.log("Welcome to TypeScript!");
}

greet();

// Never

function throwError(): never {
    throw new Error("Something went wrong");
}

// throwError(); // Uncomment to see the error