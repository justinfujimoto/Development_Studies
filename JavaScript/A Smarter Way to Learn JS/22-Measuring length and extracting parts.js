22-Measuring length and extracting parts


/*
		.length
		
	- measures length of a string
	- assign this to a variable
	- variable now has the length of the string
	
*/

/*

		.slice(0, 1)
		
		
	- use to extract certain parts out of a string
	- above example extracts the first characterSet
	- first digit selects the starting character for extraction
		- second digit ends slice, everthing before this digit is sliced
		
	first digit - second digit = total characters to be extracted
	
		.slice(0)
		
	- empty second digit means it will extract everything from the first digit to the last digit
	
	
	var str = prompt("Enter some text");  // prompt
	var numChars = str.length;            // length of prompt response assigned to numChars
	for (var i= 0; i < numChars; i++) {   // for loop cycles through the length, numChars
	  if (str.slice(i, i + 2) === "  " {  // prompt string is sliced from the beginning, and checks by double segments === "double spaces"
	    alert("No double space allowed!")  //if it finds two-spaces, alert displays
		break;                            // loop stops after finding double space
	  }
	}


*/









var numChars = cityToCheck.length;  //numChars variable declares the length of cityToCheck
var seg = cityToCheck.slice(1, numChars - 1); //numChars is the length, cityToCheck is the string var

//Made a variable that gets the length of a string as a variable
//Slice from the string, everything in between the string, numChars is the variable of the cityToCheck
//numChars is the length of cityToCheck, therefore it is the second number of var seg
//numChars = cityToCheck.length, and cityToCheck is the variable of a string

