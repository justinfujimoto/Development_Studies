45-Events: link

<a href="JavaScript:Void(0)" onClick="alert('hello')">Greeting</a>
         or... "#" 
		 
/* 

  # - reload current page - PROBLEM if located at the bottom of page, it will reload at the TOP
  JavaScript:Void(0) - ONLY runs JS - nothing extra
  onClick - when the button is clicked, execute statements
  onClick="alert('hello')" - cannot have double quotes in both
 
*/


< a href="JavaScript:Void(0)" onClick="var greet='hi'; alert(greet);">
//You can have multiple statements execute in onClick, use common sense


call a function!

function popup(message){
  alert(message)
}

<a href="JavaScript:Void(0)" onClick="popup('hello');">Click</a>