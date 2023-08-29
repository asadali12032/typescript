//-------------------------PROBLEM 1-------------------------------------
// Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified
// index in the array. Return the modified array.
 function takingArray( studentNames:string[], index:number, value:string){
  studentNames.splice(index,0,value);
  return studentNames
}
var stuNames:string[]=['usama','zaman','azeem','attique'];
var arrayResult = takingArray (stuNames, 2, 'arslan');
console.log(arrayResult);

//-------------------------PROBLEM 2---------------------------------------
// // Implement a simple shopping cart program using an array.
// Create functions to add items, remove items, and update quantities
// using the splice method. Print the cart's contents after each operation
var shoppingCart: string[] = ["meat", "rice", "sugar", "salt"];
function addItem(item: string) {
  shoppingCart.splice(0, 0, item);
}
addItem("milk");
console.log(shoppingCart);
function deleteItem(itemName: string) {
  var i = 0;
  while (i <= shoppingCart.length) {
    if (itemName == shoppingCart[i]) {
      shoppingCart.splice(i, 1);
    }
    i = i + 1;
  }
  console.log(itemName, " is not in Cart");
}
deleteItem("sugarcane");
console.log(shoppingCart);
//---------------------------PROBLEM 3--------------------------
// Write a program that uses a while loop to print the first 25 integers.
var integer: number = 0;
while (integer <= 25) {
  console.log(integer);
  integer = integer + 1;
}
//-------------------------PROBLEM 4---------------------------------
// Write a program that uses a while loop to print the first 10 even numbers.
var evenNumber: number = 0;
while (evenNumber <= 10) {
  console.log(evenNumber);
  evenNumber = evenNumber + 2;
}
//-------------------------PROBLEM 5------------------------------------
// Create a function that takes a positive integer as parameter
// and uses a while loop to calculate and return the factorial of that number.
function factorial(positiveInteger: number) {
  var factorialIndex = 1;
  var factorialResult=1;
  while (factorialIndex <= positiveInteger) {
   factorialResult = factorialResult *factorialIndex;
   factorialIndex = factorialIndex + 1;
  }
  return factorialResult;
  // console.log(factorialResult);
}
var printFactorial:number = factorial(5);
console.log(printFactorial);
//-----------------------PROBLEM 6 ---------------------------------------
// Write a program having an array of numbers if the number is negative 
// it should remove the negative number from the array.
var negativeArray:number[]=[1,2,-3,4,-5];
var negativeArrayIndex:number = 0;
while(negativeArrayIndex < negativeArray.length){
  if(negativeArray[negativeArrayIndex] < 0){
    negativeArray.splice(negativeArrayIndex,1);
  }
  negativeArrayIndex++; 
}
console.log(negativeArray);

//---------------------PROBLEM 7------------------------------------------
// Create a function that takes an array of numbers as parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array.
function arraySum(inputNumber:number[]){
  var y = 0;
  var sum = 0;
  while(y < inputNumber.length){
    sum = sum + inputNumber[y];
    y = y +1;
  }
  return sum;
}
var exampleArray:number[]=[1,3,5,7,9];
var sumOfArray = arraySum(exampleArray);
console.log(sumOfArray);
//-------------------------PROBLEM 8--------------------------
// Implement a program that takes a list of temperatures in Celsius as input from
// the user. Convert each temperature to Fahrenheit using the formula
// F = (C * 9/5) + 32 and store the converted temperatures in an array.
// Use a while loop to perform the conversion for each temperature.
var temperature:number[] = [25,30,40,50,60];
var temperatureIndex = 0;
while (temperatureIndex < temperature.length){
  var fahrenheitTemp:number = (temperature[temperatureIndex]*9/5) + 32;
  var tempArray:number[]=[];
  tempArray.splice(temperatureIndex,0,fahrenheitTemp);
  temperatureIndex = temperatureIndex + 1;
  console.log(tempArray)
}
