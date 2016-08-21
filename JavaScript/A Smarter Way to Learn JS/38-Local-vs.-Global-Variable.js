38-Local vs. Global Variable



/*	Global

	- Variable declared in main code
	
*/


/*	Local

	- Declared in a function
	- Parameter

*/

GLOBAL and LOCAL variables DIFFER in their SCOPE

function concatWds-()- -{-
  var message = "Hello Kitty";
  word 1 word 2 word 1 word 2
  text text var 
  concatWds -concatWds-
  -function-
  return
-}- ()

function concatWds(word1, word2) {
  
  var text = word1 + word2;
  return text;
 
}
 
var message = concatWds("Hello ", "Kitty");
  
 