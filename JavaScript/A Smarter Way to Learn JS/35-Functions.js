35-Functions


//Time telling code
function tellTime() {								//Keyword function
	var now = new Date();							//Date object
	var theHr = now.getHours();						//Extract hours
	var theMin = now.getMinutes();					//Extract minutes
	alert("Current time: "+ theHr + ":" + theMin);	//alert minutes and hours
}

tellTime();  //Calling code

/* Functions

	- () identfiy it as a function
	- {} Enclosed in curly brackets to enclose the code that will execute
	- Function-naming - same rules for variable naming, function is a variable	
	- Block of code
	- Invoke its name - Calling code - state the name of the function
	- Saves repetition 
	- Makes code easier to understand
	- Call the function to several pages
	
	Placement
	
	- External JS file
	- End of the HTML body section
	or	- HTML head section
	- All functions should precede the main code (so when called by main code, they're already loaded in memory
	and ready to go!)
*/


//Extras

/* 

- Functions can call itself
- MUST CALL the function to have it run
	

