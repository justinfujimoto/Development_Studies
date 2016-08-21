31-Extracting parts of the date and time

var now = new Date();

/*

	- The statement creates a Date object
	- looks like string, BUT isn't one
	- Days are values of 0 - 6, Sun. - Sat.
	
*/

var day = now.getDay();
//extracts the day from the day (0-6, [mon. - thurs.])
