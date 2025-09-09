// Practice: Creating Arrays 2

// --- Task 1: Initialize the Array ---
let myArray = new Array(7);     // size 7
myArray.fill("Hello");          // fill with "Hello"
console.log("Initial array:", myArray);

// --- Task 2: Update part of the Array ---
// replace indexes 2..4 (end is exclusive) with "Hi"
myArray.fill("Hi", 2, 5);
console.log("Updated array:", myArray);

// --- Task 3: Populate with a for loop ---
let numbers = new Array(5);
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i * 10;          // index * 10
}
console.log("Numbers array:", numbers);