// 1. Basic Interface
interface User {
    readonly id: number;
    name: string;
    age: number;
    email?: string;
}


// 2. Object using Interface
const user: User = {
    id: 101,
    name: "Aakash",
    age: 21
};

console.log(user);


// 3. Normal property change kar sakte hain
user.name = "Aakash Singh";

console.log(user.name);


// 4. Optional property
// email optional tha, isliye baad me bhi add kar sakte hain
user.email = "aakash@gmail.com";

console.log(user.email);


// 5. readonly property
// user.id = 102;
// ❌ Error: id ko change nahi kar sakte


// 6. Interface with Function
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calculator: Calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 20));
console.log(calculator.subtract(20, 10));


// 7. Interface extends
interface Admin extends User {
    adminId: number;
}

const admin: Admin = {
    id: 102,
    name: "Rahul",
    age: 22,
    adminId: 5001
};

console.log(admin);


// 8. Interface for Function Parameters
interface UserData {
    name: string;
    age: number;
}

function printUser(user: UserData): void {
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

printUser({
    name: "Aakash",
    age: 21
});