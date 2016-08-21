20-for loops nested

var firstNames = ["BlueRay", "Upchuck", "Lojack", "Gizmo", "Do-Rag"];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var x = 0; x < firstNames.length; x++) {
  for (var y = 0; y < lastNames.length; y++) {
    fullNames.push(firstNames[x] + lastNames[y]);
    alert(fullNames); 
  }
}

/*

  1. Created three arrays
    - firstNames, lastNames, fullNames
	
  2. Created two for loops
    - first for loop firstNames : loop increment 0 - 4 
	- second for loop lastNames : loop increment 0 - 3
	
  3. Push -adding elements to beginning of empty array- 
      - concatenation firstNames + lastNames
	 
  4. Alert - display combined names
    - names are not spaced??
	
*/


/*

  - The inner loop cycles via all elements
  AFTER cycling
  - One index runs per inner loop cycle iterations
  
  outer loop [i], i++/inner entire cycle
  (outer loop runs per inner entire cycle)
  
  - inner cycle = "seconds" hand
  - outer cycle = "minutes" hand
  
  Similar to a clock
  
  - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  unlimited nesting
  Nested loop is indented 2 spaces
  
*/  

/* 

  outer and inner loop can't share the same counter
  
*/

/*

for loops vs. statements

loops are cycled through

statements - the results or outcomes of the for loops 
           - use the for loops  

*/