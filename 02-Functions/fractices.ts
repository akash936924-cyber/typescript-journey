// Q1
function square(num: number): number {
    return num * num;
}

// Q2
const cube = (num: number): number => num * num * num;

// Q3
function introduce(name: string, age: number): void {
    console.log(`${name} is ${age} years old.`);
}

// Q4
function login(username: string, password?: string): void {
    console.log(username, password);
}

// Test
console.log(square(5));
console.log(cube(3));
introduce("Aakash", 21);
login("akash123");
login("akash123", "secret");