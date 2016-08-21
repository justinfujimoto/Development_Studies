33-Specifying Date and Time

var futureDate = new Date("December 28, 2021" 00:00:00);
/*
	
	- declare Date object 
	- state the date, written out
	- possibly include time 00:00:00 format
	- EVERYTHING IS ELAPSED BETWEEN THE REFERENCE DATE - JANUARY 1, 1970 IN MILLISECONDS
	
*/


//1.
var today = new Date();
var betterLife = new Date("December 28, 2021");
var msDiff = betterLife - today;
var daysUntil = msTime / (1000 * 60 * 60 * 24);
var daysUntil = Math.floor(daysUntil);
alert(daysUntil);

//2.
var today = new Date();
var betterLife = new Date("December 28, 2021");
var msToday = today.getTime();
var msBetterLife = betterLife.getTime();
var msDiff = msBetterLife - msToday;
var daysUntil = msDiff / (1000 * 60 * 60 * 24);
var daysUntil = Math.floor(daysUntil);
alert(daysUntil);

//3.
var timeDiff = new Date("December 28, 2021") - new Date("May 29, 2016");
var msToDays = timeDiff / (1000 * 60 * 60 * 24);
alert(Math.floor(msToDays));


//4.
var timeDiff = new Date("December 28, 2021").getTime() - new Date().getTime();
var msToDays = timeDiff / (1000 * 60 * 60 * 24);
alert(Math.floor(msToDays));

//FOUR DIFFERENT WAYS TO FIND THE DIFFERENCE OF DAYS BETWEEN DATES!
 
/* BREAK DOWN */

//1.
var today = new Date();							 //get the date (months, 0 - 31) 
var betterLife = new Date("December 28, 2021");  //get the date (months, 0 - 31)  Both reference Jan. 1 1970
var msDiff = betterLife - today; ``				 //	
var daysUntil = msTime / (1000 * 60 * 60 * 24);	 // 1000 - seconds, 60 - minutes, 60 - hours, 24 - days
var daysUntil = Math.floor(daysUntil);			 //
alert(daysUntil);								 //				




/*

What is the keyword for extracting the basic time unit you need for figuring intervals

	- getTime