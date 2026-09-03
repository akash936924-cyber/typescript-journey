// const numbers: number[] = [10, 20, 30, 40];

// console.log(numbers[0]); // 10
// console.log(numbers[2]); // 30



// =======================
// 1. Number Array
// =======================

const numbers: number[] = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

// =======================
// 2. String Array
// =======================

const fruits: string[] = ["Apple", "Mango", "Banana"];

console.log(fruits[1]); // Mango

// =======================
// 3. Boolean Array
// =======================

const answers: boolean[] = [true, false, true];

console.log(answers);

// =======================
// 4. Mixed Array (Union)
// =======================

const data: (string | number)[] = ["Aakash", 21, "CSE", 2026];

console.log(data);

// =======================
// 5. Important Array Methods
// =======================

const nums: number[] = [1, 2, 3];

// push
nums.push(4);
console.log(nums);

// pop
nums.pop();
console.log(nums);

// length
console.log(nums.length);

// =======================
// 6. Loop on Array
// =======================

// for...of
for (const num of nums) {
    console.log(num);
}

// forEach
nums.forEach((num) => {
    console.log(num);
});

// map
const doubled = nums.map((num) => num * 2);
console.log(doubled);

// filter
const even = nums.filter((num) => num % 2 === 0);
console.log(even);

// =======================
// 7. Tuple
// =======================

const student: [string, number] = ["Aakash", 21];

console.log(student[0]);
console.log(student[1]);

// =======================
// 8. Tuple with 3 Values
// =======================

const employee: [number, string, boolean] = [101, "Aakash", true];

console.log(employee);

// =======================
// 9. API Response Example
// =======================

const result: [number, string] = [200, "Success"];

console.log(result);

// =======================
// 10. Array of Tuples
// =======================

const students: [string, number][] = [
    ["Aakash", 21],
    ["Rahul", 22],
    ["Riya", 20],
];

for (const student of students) {
    console.log(student[0], student[1]);
}