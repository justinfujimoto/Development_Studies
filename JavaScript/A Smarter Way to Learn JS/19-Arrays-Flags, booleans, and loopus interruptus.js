19-Array: Flags, Booleans, loopus interruptus

//Boolean 

/*

  - true
  or
  - false
  
*/

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// flag

/*
  - variable
  

*/

var matchFound = "no"; //flag
for (var i = 0; i <=4; i++) {
	if (cityToCheck === cleanestCities[i]) {
		matchFound = "yes";
		alert("It's one of the cleanest cities");
	}
}
if (matchFound === "no") {
	alert("It's not on the list");
}
//replace 'no' and 'yes' with false and true
//no quotes

var matchFound = "no"; //flag
for (var i = 0; i <=4; i++) {
	if (cityToCheck === cleanestCities[i]) {
		matchFound = "yes";
		alert("It's one of the cleanest cities");
	}
}
if (matchFound === "no") {
	alert("It's not on the list");
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//break;

/*

  - stops a loop from continuing, when match is found
  - eliminates wasted computer cycles
  
*/
  

var matchFound = "no"; //flag
for (var i = 0; i <=4; i++) {
	if (cityToCheck === cleanestCities[i]) {
		matchFound = "yes";
		alert("It's one of the cleanest cities");
		break; //added break;
	}
}
if (matchFound === "no") {
	alert("It's not on the list");

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//.length

/*

  - assigns the number of elements in the array to a variable

*/

var numElements = cleanestCities.length; // full length of array
var matchFound = "no"; //flag
for (var i = 0; i < numElements; i++) {     // loop keeps going as long as i is less than the number of elements
	if (cityToCheck === cleanestCities[i]) {
		matchFound = "yes";
		alert("It's one of the cleanest cities");
	}
}
if (matchFound === "no") {
	alert("It's not on the list");

// stops one short since length number is 1-based	
