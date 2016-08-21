14-If statements nested

if ((if x === y || a === b) && c === d) {
	g = h;
}
else {
	e = f;
}

if (c === d) {   //&&
	if (x === y){  //||
		g = h;
	}
	else if (a === b) { //||
		g = h;
	}
	else {    //if fails
		e = f;
	}
}
else {
	e = f;
}

/*

- top-level if
- three blocks nested inside the if statement
- nested if statements is another way to write a test condition - aside from using &&/||

*/