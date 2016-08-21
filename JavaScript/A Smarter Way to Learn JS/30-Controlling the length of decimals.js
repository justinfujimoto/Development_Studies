30-Controlling the length of decimals

.toFixed()

/*	Reflection

	- Rounds number up depending on decimal position
	- The number in the parenthesis is the position
	- Rounds number up/down depending on the browser
	
	Fix:
	
	var str = num.toString();                    //convert num to a string
	if (str.charAt(str.length - 1) === "5") {	 //finds "5" in the string
	  str = str.slice(0, str.length - 1) + "6";  //if it finds "5", slices out 5 and replaces with "6"
	}
	num = Number(str);                           //converts string back to a number
	roundedNum = num.toFixed(2); 				 //rounds the number at the fixed position
	
*/
	
/*

	- The keyword rounds a # to a specified # of decimal places and converts it to a string
	
	- In case of ambiguity, change the last decimal value to a 6
	
	- if there position rounded is not specified, rounds a number to no places () NO DECIMAL
	
	
	//Missed Questions
	
	x = Number(x.toFixed(2))
	//Single statement - round var. rep. by # 2 places, then convert to a string 
	
	
	if (num.toFixed(2).length > 4) {
	//First line of an if statement, tests whether a string converted to a string, and rounded 2 decimal places,
	has > 4 characters in it
	
*/
	
	convert num to a string
	find 5
	if finds 5 replace with 6
	convert string to a number
	round number at the fixed position
	
	