10-If Statements

var x = prompt("What does a dog wag?");
if (x === "tail") { 						//condition being tested
  alert("Correct!");						//executed statement(s) if true
}

/*

	
	If Statements Format: 
		
						if (condition being tested) {
 indent 2 spaces->			statements executed if True;
						}


Ex. 

var x = prompt("What does a dog wag?");
var correctAnswer = "tail";
	if (x === correctAnswer) {
	  alert("Congrats!");
	}
	
- You can use variables instead of strings (correctAnswer)
	
Ex.

var x = prompt("What does a dog wag?");
var correctAnswer = "tail";
	if (x === correctAnswer) {
	  score++;
	  userIq = "Genius";
	  alert("Congrats!");
	}
	
- Multiple statements can be executed under one If statement

// Note:
	// If statements don't require curly brackets