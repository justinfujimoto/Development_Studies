18-for loops

/*

	i++
	 - increment after each loop 	
	 
	 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	 
	Difficult questions:
	
	 i--
	 for (var i = 0; i > -3; i--) {    //starts at 0 want it to decrement DOWN 3, has to be a -3
	 - usual counter & starting value
	 - run 3 times using >, to specify loops
	 - decrement iterations
	 
	 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	 
	 Code a loop using the usual conventions and < that displays an alert containing a string 
	 50 times.
	 
	 for (var i = 0; i < 50; i++) {
		 alert("string");
	 }
	 
	 - creates 50 alerts
	 
	 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	Code a loop using the usual conventions and < that tests each element of a 5-element array, answers,
	to see if it has the value "yes". If so, a variable, already declared, is assigned a positive, single-digit
	integer. Use a number, not the array length, to limit the number of loops.
	
	for (var i = 0; i < 5, i++) {
	  if (answers[i] === "yes") {
		var1 = 1;
	  }
	} 

	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	for (var i = 0; i < 5; i++) {	// if < then the number must be less, if > number must be greater 
		
	}
		- this is the for loop format
		- you can loop anything to run any amount of times alerts, prompts, if else statements tests, etc.
		
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	// Array has two elements, loop checks elements 0 - 4 ,+ 1 increments, if they match alert will display
		each element
	
		var twoNumbers = [1, 2];
		  for (var i = 0; i < 3; i++) {
		    if (twoNumbers[i] === twoNumbers[i]) {
			  alert(i);
			}
		}