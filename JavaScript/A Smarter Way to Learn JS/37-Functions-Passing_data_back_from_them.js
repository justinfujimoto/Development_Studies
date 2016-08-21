37-Functions: Passing data back from them

/*

  Charge a minimum shippring rate of $5
  PLUS 3% (.03) of merchandise above $50, up tp $100
  Free shipping when total hits $100
  
*/

/*

	- Keyword - sends data back to the calling code is - return
	- USE a FUNCTION in ANY PLACE where YOU would USE a VARIABLE
	- Function sends data back to the calling code, variable catches it
	- 1 value can be returned to the calling code
	
*/

function calcDiscount(amt, percentage) {
  return amt - (amt * percentage);
}

return total; //passes the value of total back to the calling code

var total = calc(addIt(merch, services)); // statement w/ a call to calc, takes function addIt as an argument, addIt takes merch and services as arguements

var est = makeEst(empNum, calcBonus(10)); // function call 2-arguments: 1-variable/2-function call, 2-function call takes the argument 10, value returned by the first function is assigned to est

var x = fun1() + fun2(); //sum of two function calls, function calls take no arguments

function totalUp(a, b, c) {
	var tot = a + b + c;
	if (tot > 0) {
		return tot;
	}
}

//return - pass back to calling code