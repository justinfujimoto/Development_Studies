36-Functions: Passing them data 

//PARAMETERS AND ARGUMENTS

function greetUser() {
  alert("Hello, there")
}


var greeting = "Hello, there";
function greetUser(greeting) {
  alert(greeting);
}

greetUser(greeting);


/*

	- The variables in a function definition that catch the data passed to them 
	  by the calling code are called PARAMETERS
	  
	  Function example(ex1, ex2, ex3) {  //parameters CATCH the DATA passed to them
		  
	- Multiple arguments and parameters are separated by , comma
	
	- Rules for NAMING VARIABLES are the SAME as the rules for NAMING VARIABLES
	
	- Multiple arguments and parameters are matched by their ORDER
	
	- Function call - (arguments) - takes variables, strings, and numbers
	
*/
	  
