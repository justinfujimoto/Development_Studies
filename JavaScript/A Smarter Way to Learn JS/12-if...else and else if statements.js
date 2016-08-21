12-if...else and else if statements

if (x === "tail") {
  alert("Correct!");      // True 
}
else {
  alert("wrong answer");  // Else (false) execute this
}

// Tests if x is tail
// You CAN have two if statements, else makes the code more concise/readable

/*
	IF - tests for True, ELSE - condition tested false
		- Depends on what the user enters
		- Can execute any # of statements within
		
	if () {
		
	}
	
	else if () {
		
	}
	
	else {
		
	}
	
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	else if 
	
	- used if all tests above failed, and want to test another condition
	
	var correctAnswer = "tail";
	if (correctAnswer === "tail" {
		alert("Correct!");
	}
	else if (correctAnswer === "tale") {
		alert("Incorrect but close");
	}
	else {
		alert("Incorrect");
	}
	
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	
	- If statement formats, endless variations
	- JS stops testing whenever a condition is True
	
	Test statements
	
	if
	else
	else if

*/