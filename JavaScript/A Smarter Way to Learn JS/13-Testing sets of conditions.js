13-Testing set of conditions

if (weight > 300 && time < 6) {
  alert("Come to our tryout!")
}
else {
  alert("Come to our tryout!")
}

/*
	
	&& (AND)
	
	- Chain any # of conditions together
	- Multiple conditions must be met in order to execute statements
	
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	|| (OR)
	
	- Test for a set of conditions 
	
	
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	- If any/all condtions are True, statements execute
	- IF NOT, else
	- You can combine any # of and/or conditions
		- you create ambiguities
		
*/

if (age > 65 || age < 21 && res === "U.S.") {

/*

	This can be read as...
	
	|Over 65 or under 21 | Resident of U.S.|
	
	or 
	
	|Over 65 | Under 21 and U.S. resident|
	
*/

//Eliminate ambiguities with parenthesis ()

if ((age > 65 || age < 21) && res === "U.S.") {  //age over 65 or under 21, AND lives in the U.S.

if (age > 65 || (age < 21 && res === "U.S.")) {	 //age over 65 OR, under 21 and U.S. 

