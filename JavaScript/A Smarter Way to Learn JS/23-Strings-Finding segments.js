23-Finding segments


.indexOf  and  .lastIndexOf

//Example

var indexNum = speech.indexOf("be");

//indexNum variable is assigned the string 'speech' and finds index of the first character 
//of that first instance of "be"


/*

	- segments are stored in the .indexOf() parenthesis
	- each time a segment is found it counts 1? and -1 when not found
	
	- segments can be represented by a variable
*/

Code the first line of an if statement that tests whether a 3-character slice at the beginning of a string represented by one variable can be found somewhere within a string represented by a second variable.

if (var2.indexOf(var1.slice(0, 3) !== -1) {
	
	- if a 3-character slice can be found at the beginning of a string var 
	- !== -1 is when it's not found, not equal to not found
	
var x = y.lastIndexOf("x");
  - 