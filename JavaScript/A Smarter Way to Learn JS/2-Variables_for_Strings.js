2-Variables for Strings

var name = "Mark"; //* JS knows name refers to the text string "Mark"

/*
	
	Variables
	
	- A word referring to a particular value
	- var is followed by a name you choose to give it, within limits
	- If you print name, js remembers the value that name referes to, and prints...
	- You can declare variables without any values e.g. var declaredVariable;

*/

/*
	
	Value Changes

	- If I code: 
		var name = "Mark";
			name = "Ace";
		JS prints "Ace"
		
		- var is missing BECAUSE variable was declared earlier, in the original statement
		- var is the keyword that creates a variable - the keyword that declares it
		- Once declared, you don't have to declare it again
		- You can just assign the new value to it
		
		
	- Variables can have any # of values, BUT only one at a time
	
		var nationality; 			//* (declaration statement)
			nationality = "U.S.";   //* (assignment statement)
 	
	- You can declare a variable in one statement, leaving it undefined,
	   and assign a value to it later, WITHOUT declaring it again
	- Any amount of code can separate the declaration and assignment, declaration must come first!
	
*/

/*
	
	Variable Names
	
	var floogle = "Mark";
	
	... is just as good as
		
	var name = "Mark";
	
	IF you write
	
	var floogle = "Mark";
	
	- JS variables have no inheret meaning to JS
	- JS is blind to semantics
	- Any word can be used
	- Use meaningful names; help other coders understand your code
	
	Examples:
	
	var lastName = "Smith";
	var cityOfOrigin = "New Orleans";
	var aussieGreeting = "G'day";
	
*/

/*

	Variables vs. Strings
	
	- Variables are never enclosed in quotes
		- Alphabet letter or word
		- Not a keyword that has special meaning for JS e.g. alert
	
	- Strings are always enclosed in quotes
	
	
*/

/*

	Variable Format
	
	var nickname = "Bub";
	
	- spaces are a style choice RATHER than a legal req.
	
*/

/*
	
	Alert & Variable
	
	Last Chapter:
	
		alert("Thanks for your input!");
		
	Using variable:
		
		var message = ("Thanks for your input!");
			alert(message);
			
		- Assign text string to a variable
		- JS a;ways substitutes the value for the variable
		
*/

//* Interactive Exercise: 
//* http://www.asmarterwaytolearn.com/js/2.html

/* Answers:

1. What is a thing you create that refers to a value?
	Variable
	
2. In one word, if it is enclosed in quotation marks, what is it?
	text string or string

3. What is the keyword that declares a variable? -
	var
	
4. This statement...
		userName = "buddy5000";
		...is correct only if the variable has already been _______. 
	 declared
	 
5. Form a statement that declares the variable punchline and assigns a value to it
	var punchline = "the accountant.";
	
6. In a single statement, declare the variable nickname and assign the string "Satchmo" to it.
	var nickname = "Satchmo";
	
7. Declare the variable teamName -
	var teamName;

8. In a single statement declare a variable and assign a string to it. (You've learned only one rule for naming variables so far, so it's the only one I'll hold you to.)
	var myName = "Justin";
	
9. Declare a variable.
	var myDeclaration;

10. Assign a string to a variable that has already been declared.
	myName = "Justin";

11. This statement has already been coded.
		var bestMan = "Charlie";
		Assign the variable a new string value. 
	bestMan = "Justin";

12. Declare an undefined variable in a statement. In a second statement assign it a string. -
	var myName;
		myName = "Justin";
		
13.  In a single statement declare a variable and assign a string to it.
	var myName;
		myName = "Justin";
		
14. Declare a variable.
	var myDeclaration;
	
15. Assign a string to a variable that has already been declared.
	var myCity;
		myCity = "Vallejo";

16. var bestMan = "Charlie";
		Assign the variable a new string value. 
	bestMan = "Justin";
	
17. Declare an undefined variable. In a separate statement, assign a string value to it. -
	var favoriteFood;
	favoriteFood = "Eggs";
	
18. In the first statement declare a variable and assign it a string. In the second statement change the value of the variable to a different string. -
	var favoriteBook = "Sirens of Titan";
		favoriteBook = "Slaughterhouse Five";
		
19. Declare a variable and assign it a string. Then code an alert, specifying the variable, not the string, as the message
	var jobDescription = "CEO";
		alert(jobDescription);

20. Declare a variable and assign it a string that's nothing but the name of the variable. Then code an alert, specifying the variable, not the string, as the message.
	

		
	
	
	