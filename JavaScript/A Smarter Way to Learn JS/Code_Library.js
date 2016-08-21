Code Library

CHAPTER 20

//CONCATENATES ANIMALS AND PRODUCTS, ACCUMULATE COMBINATIONS INTO FULL NAME
var firstNames = ["Justin", "Mark", "Elon", "Peter", "Richard"];
var lastNames = ["Fujimoto", "Zuckerberg", "Musk", "Diamandis", "Branson"];
var fullNames = []; //EMPTY ARRAY FOR ELEMENTS TO BE ACCUMULATED
var k = 0; //COUNTER FOR FULL NAMES
for (var i = 0; i < firstNames.length; i++) {
	for (var j = 0; j < lastNames.length; j++) {
		fullNames[k] = firstNames[i] + lastNames[j];
		k++; //COUNTER INCREMENT FOR FULL NAMES
	}
}

CHAPTER 31

//STATEMENT CREATE A DATE OBJECT ASSIGNED TO A VARIABLE
var now = new Date();


//EXTRACT THE DAY (0-6) AND CONVERT IT TO A STRING W/ AN Array

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
//Name of days - Array
var now = new Date();
//Date object //capitalize Date!!
var dayToday = now.getDay();
//Extracts index# day - Sunday = 0,  (0-6)
var nameOfDay = dayNames[dayToday];
//Index number of dayToday is chosen from the array of days, assigned to nameOfDay
alert("Today is " + nameOfDay);
//Display today's day


//CREATE DATE OBJECT CONVERTS TO A String

var dStr = new Date().toString();


//EXTRACT DAY OF THE WEEK FROM DATE OBJECT - D, ASSIGNED TO DAY
var day = d.getDay();


//CODE THE FIRST LINE OF AN IF STATEMENT THAT TESTS WHETHER THE DAY EXTRACTED FROM DATE OBJECT IS THUR.
if (now.getDay() === 4) {
//extracted day === 4 is Thursday (0-6, sun. - sat.)



CHAPTER 32

//CODE THE FIRST LINE OF AN IF STATEMENT THAT TESTS WHTHER IT'S THE LAST QUARTER OF THE YEAR
if (now.getMonth > 8) {
	  
	  
//CODE A STATEMENT THAT DETERMINES THE seconds SINCE MID, JAN. 1, 1970 AND ASSIGNS IT TO A VARIABLE
// THAT HASN'T BEEN DECLARED BEFOREHAND. USE ANY VARIABLE YOU LIKE REP THE DATE OBJECT
var milliIntoSec = now.getTime() / 1000;



//CODE THE FIRST LINE OF AN IF STATEMENT TESTING WHETHER THE CLOCK IS AT AN HOUR ON THE DOT
// CHECK MINUTES THEN SECONDS
if (now.getMinutes() === 0 && now.getSeconds() === 0) {
//checking hours does not matter

//CREATE DATE OBJECT, EXTRACT MONTH, CONVERT MONTH TO A MONTH NAME, CODE ALERT THAT DISPLAYS MONTH NAME
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var month = d.getMonth();
alert(monthNames[month]);


CHAPTER 33

//STATEMENT THAT CREATES A Date OBJECT FOR 1 MINUTE PAST MIDNIGHT, NEW YEAR'S DAY, 2015 - ASSIGN TO kissEnds, declared
kissEnds = new Date("January 1, 2015 00:01:00");

//CODE A STATEMENT THAT CONVERTS THE MS REPRESENTED BY ticks TO HOURS AND ASSIGNS THE RESULTS TO A VAR NOT DECLARED
var hours = ticks / (1000 * 60 * 60);

//IF STATEMENT WHETHER MS REPPED BY ms CONVERTS TO MORE THAN 30 DAYS
if (ms / (1000 * 60 * 60 * 24) > 30) {
	
//CODE A STATEMENT THAT FINDS OUT THE DAY OF THE WEEK (a number) exactly a year before the reference date 
//assigns it to a variable that hasn't been declared beforehand
var pastDay = new Date ("January 1, 1969").getDay();

//CREATE A Date OBJECT FOR THE END OF THE MONTH
//DISPLAY AN ALERT THAT GIVES THE NUMBER OF DAYS FOR THAT DATE SINCE THE REFERENCE DAYS FOR THAT DATE SINCE REF. DATE JAN 1, 1970

CHAPTER 35

//Alert the current minutes and hours in a function/Call the function
function time() {
	var now = new Date();
	var minutes = now.getMinutes();
	var hours = now.getMinutes();
	alert("Current time: " + minutes + ":" + hours);
}
time();

CHAPTER 36 

//Make a function that lets you add any two numbers
function sumOf(num1, num2) {     //two parameters num1, num2
	var sum = num1 + num2;       //sum of arguments num1 and num2 declared by the variable sum   
	alert(sum);                  //Alert the sum
}
sumOf(1, 2);                     //Calling the function

CHAPTER 37

//Function to calculate total of order
//If total is > 100 free shipping, if total is 50 or less add 5, else if order is between 50.01 - 100 add 5 and 3% of merch total
function calTot(merchTotal) {
  var orderTotal;
  if (merchTotal >= 100) {
    orderTotal = merchTotal;
  }
  else if (merchTotal < 50.01) {
    orderTotal = merchTotal + 5;
  }
  else {
    orderTotal = merchTotal + 5 + (0.03 * (merchtotal - 50));
  }
  return orderTotal;
}
alert(calTot(3));