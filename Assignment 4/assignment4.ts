// -------------------PROBLEM 1---------------------------
// Develop a program that calculates and prints 
// the sum of the first n even numbers using a for loop
var sum = 0;
// var nNumber:number = 100;
function evenNumberSum(nNumber:number) {
    for (let i = 0; i <= nNumber * 2; i = i + 2) {
        sum = sum + i;
    }
    console.log(sum);
}
evenNumberSum(100);
// -------------------PROBLEM 2--------------------------------
// Implement a program that uses a for loop to iterate
//  through an array of numbers and print only the even numbers.
var iterateNumber = 10;
for (let x = 1; x <= iterateNumber; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}
// -----------------------PROBLEM 3--------------------------------- 
// Implement a program that uses a loop to iterate through an array of
//  numbers and remove all the even numbers from them and just leave the odd ones
var iterateNumber2 = 10;
for (let y = 1; y <= iterateNumber2; y++) {
    if (y % 2 != 0) {
        console.log(y);
    }
}
// -----------------------PROBLEM 4-------------------------------------
// Write a program that defines a function to calculate the area of a circle.
//  The function should take the radius as input and return the calculated area.
function circleArea(radius:number) {
    var area = 3.14 * radius * radius;
    console.log(area);
}
circleArea(4);
// --------------------------PROBLEM 5------------------------------------------
// Develop a program that reads a list of grades and uses the splice
//  method to remove failing grades (below 50) from the array
var grades = [30, 69, 82, 56, 40, 99];
for (let z = 0; z <= grades.length; z++) {
    if (grades[z] < 50) {
        grades.splice(z, 1);
    }
}
console.log(grades);
// --------------------------PROBLEM-6--------------------------------------------
// Write a program that uses a function 
// to find the largest element in an array of numbers.
var numbers = [10, 30, 45, 11, 9, 39];
function findLargestNumber() {
    var largestNumber = 0;
    for (let a = 0; a < numbers.length; a++) {
        if (largestNumber < numbers[a]) {
            largestNumber = numbers[a];
        }
    }
    console.log(largestNumber);
}
findLargestNumber();