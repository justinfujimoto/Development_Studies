4-Variable Names Legal and Illegal

/*
	List of JavaScript Reserved or Keywords
	
	abstract		final			protected
	alert			finally			public
	as				float			return
	boolean			for				short
	break			function		static
	byte			goto			super
	case			if				switch
	catch			implements		synchronized
	char			import			this
	class			in				throw
	continue		instanceof		throws
	const			int				transient
	debugger		interface		true
	default			is				try
	delete			long			typeof
	do				namespace		use
	double			native			var
	else			new				void
	enum			null			volatile
	export			package			while
	extends			private			with
	false
*/

/*

	Don'ts/Do's:
	
	- Enclose with quotes
	- Number or start with a number
	- Reserved/keywords i.e. var, alert...etc.
	- Name can't contain spaces
	- Can only contain: letters, numbers (not stand alone or start), $, underscores
	- Case sensetive e.g. rose vs. Rose
	- camelCase
		- Begin in lowercase
		- if more than one word in name
		- subsequent words set initial cap, creating hum
		- make var more readable
	- Make var names descriptive 
		- easier to figure out what code means
		- balance readability e.g. faveBreed or favBrd
		
*/

//* Interactive Exercise: 
//* http://www.asmarterwaytolearn.com/js/3.html

/*
	1. Type the illegal character in this statement.
		var product cost = 3.45;
		space (have to type out a space)
	
	2. Type the illegal character in this statement.
		var P2_a%88$;
		
	3. Rewrite this using camelCase.
		var Nameofband;
		var nameOfBand;
		
	4. Declare a variable using nothing but all of the legal characters that aren't alphabet characters or numbers. Don't repeat any of them.
		var $_; or var _$;
		
	5. Form a statement that declares a variable in camelCase
		var averageHumanIntelligence;
	
	6. In a single statement, declare the variable firstLegalChar and assign it a string. The string consists entirely of the first character on the keyboard in the top row that's legal in a variable name, as long as the character doesn't come first.
		var firstLegalChar = "1";
	
	7. Declare a variable, in camelCase, that combines the two syllables boo and hoo.
		var booHoo;
		
	8. In a single statement declare a legally-named variable and assign a number to it.
		var number_$ = 1;
		
	9. In a single statement declare a legally-named variable and assign to it the sum of 2 other legally-named variables.
		var sum = num_2 + num_2;
	
	10. Declare a variable whose name is the combination of 3 characters, in this order: a legal first character that is not a letter, a character that would be illegal as a first character, and a character that would be legal anywhere in the name.
		var $1d;
		
	11. The variable boogieWoogie has already been declared. Assign it the value of another variable, woogieBoogie.
		boogieWoogie = woogieBoogie;
		
	12. Declare a variable that is a combination of your first and last names. Use camelCase.
		var fujimotoJustin;
	
	13. Declare a variable using nothing but all of the legal characters that aren't alphabet characters or numbers. Don't repeat any of them.
		var $_;
		
	14. In a single statement declare a legally-named variable and assign a number to it.
		var num = 1;
	
	15. In a single statement declare a legally-named variable and assign to it the sum of 2 other legally-named variables.
		var num = num1 + num3;
	
	16. Declare a variable whose name is the combination of 3 characters, in this order: a legal first character that is not a letter, a character that would be illegal as a first character, and a character that would be legal anywhere in the name.
		var $1d;
		
	17. The variable boogieWoogie has already been declared. Assign to it the value of another variable, woogieBoogie.
		boogieWoogie = woogieBoogie;
		
	18. Declare a variable that is a combination of your first and last names. Use camelCase. If you have a complex name, simplify it. Use "Sarah Billings" instead of "Sarah Sue Billings-Coopersmith III"
		var fujimotoJustin;
	
	19. Declare a variable whose name is your first and last names combined, in camelCase.
		Assign the variable your first and last names, as a string.
		Code an alert, specifying the variable, not the string, as the message.
			var justinFujimoto;
			justinFujimoto = "My Name";
			alert(justinFujimoto);
		
	20. Declare a variable that combines a number, an alphabet letter, and one of the legal characters that are neither an alphabet letter nor a number.
		Assign to the variable a string consisting of another legal character that is neither an alphabet letter nor a number.
		Display the variable's value in an alert, specifying the variable, not the value, as the message.
			var a_2;
			a_2 = "$";
			alert(a_2);