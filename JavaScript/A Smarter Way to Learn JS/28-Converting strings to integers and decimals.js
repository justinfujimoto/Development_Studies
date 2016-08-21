28-Converting strings to integers and decimals

parseInt()

- Converts number(or variable as a #) in a string to a number WHEN adding (+)
- If it's a decimal, it doesn't round -- it lops off the decimal value

parseFloat()

- Converts/maintains decimal values 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

alert(parseFloat(x) + parseFloat(y));

/*

	- Conversions are made separate
	
	
	
*/


/*

	Interactive Exercises
	
	1. Code the first line of a for statement
	2. The string "0" has been assigned to numString
	3. Your statement assigns the counter, i, the string represented by numString
	4. numString converted to an integers
	5. Run 10 times, using <, with the usual incrementing
	
	for (var i = parseInt(numString), i < 10, i++) {
