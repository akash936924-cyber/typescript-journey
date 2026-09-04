// Primitive Alias
type UserName = string;
let userName: UserName = "Aakash";

// Object Alias
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Aakash",
  age: 21
};

// Union
type ID = string | number;
let id: ID = "TS101";

// Function Alias
type Multiply = (a: number, b: number) => number;

const multiply: Multiply = (a, b) => a * b;

console.log(userName);
console.log(user);
console.log(id);
console.log(multiply(5, 4));