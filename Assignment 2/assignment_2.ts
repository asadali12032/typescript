// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
var temperature40_celcius:number = 30;
var temperature_forenh:number = 40;
console.log(temperature40_celcius, 'Celcius in Fahrenheit is', ((temperature40_celcius * 9)/5 + 32));
console.log(temperature_forenh, "Farhenheit in celcius is", ((temperature_forenh - 32)* 5/9));
// Write a program that calculates the percentage
var obtain_marks:number = 600;
var total_marks:number = 1100;
var percentage:number = (obtain_marks/total_marks)*100;
if (obtain_marks > total_marks){
    console.log("The total Marks must be grater than Obtained marks")
}
else{
console.log(percentage,'%');
}
/* Write a program that converts given number of days in to weeks and days
 such as 17 days = 2 weeks and 3 days */
 var days:number = 27;
 var weeks:number =Math.floor(27/7);
 var weeks_days:number = 27 % 7;
 console.log(weeks, 'weeks and', weeks_days, 'days' );
/* Write a program that calculates the discount for a product based on its price.
If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.*/
var price:number = 75;
var discountA:number = price - (10/100 * 75);
var discountB:number = price - (5/100 * 75); 
if(price > 100){
    console.log('The total price is ',discountA);
}
else{
    console.log('The total price is ',discountB);
}
/* Create a program that determines the category of a user-provided age. 
If the age is between 0 and 12, print "Child." 
If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."*/
var age:number = 12;
if(age>0 && age<=12){
    console.log("Child");
}
else if(age>12 && age<=19){
    console.log("Teenager");
}
else{
    console.log("Adult");
}
/*Develop a program that determines the day of the week.
 Ask the user for a number (1-7) and use nested
  if statements to print the corresponding day's name.*/
var dayNumber = 3;
if(dayNumber == 1){
    console.log("Monday");
}
else if(dayNumber == 2){
    console.log("Tuesday");
}
else if(dayNumber == 3){
    console.log("Wednesday");
}
else if(dayNumber == 4){
    console.log("Thursday");
}
else if(dayNumber == 5){
    console.log("Friday");
}
else if(dayNumber == 6){
    console.log("Saturday");
}
else if(dayNumber == 7){
    console.log("Sunday");
}
else{
    console.log("please Give Number between 1-7")
}
/*Write a program that checks if the given number is  divisible by 3 or 5 or both
 or not divisible by anyone show output accordingly.*/
var givenNumber:number = 2;
if(givenNumber%3 == 0 && givenNumber%5 != 0){
    console.log("Number is divisible by 3");
}
else if(givenNumber%3 != 0 && givenNumber%5 == 0){
    console.log("Number is divisible by 5");
}
else if(givenNumber%3 == 0 && givenNumber%5 == 0){
    console.log("Number is divisible by both 3 and 5");
}
else{
    console.log("Number is not divisible by both 3 and 5");
}
// Write a program that checks if the given year is leap year or not.
var year:number = 1996;
if(year%4 == 0){
    console.log(year, 'is a leap year');
}
else{
    console.log(year, 'is not a leap year');
}
/*Write a program that takes the number of units consumed by a user 
if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax
so on up to if greater than 500 then add 25% of tax*/
var unitsConsumed:number = 350;
var billPrice:number = 350 * 5;
var tax1:number = billPrice + (billPrice * 10/100);
var tax2:number = billPrice + (billPrice * 15/100);
var tax3:number = billPrice + (billPrice * 25/100); 
if(unitsConsumed > 100){
    console.log('your Bill is ',tax1);
}
else if(unitsConsumed > 100 && unitsConsumed <= 200){
    console.log('Your Bill is ',tax2);
}
else if(unitsConsumed > 200){
    console.log('Your Bill is ',tax3);
}
else{
    console.log('Your Bill is ', billPrice);
}
