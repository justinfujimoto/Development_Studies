46-Events: button

<input type="button" value="click" onClick="alert('Hello world!);">

/*

  1. <input type="button" value="click"
  
    - button
	- should be enclosed in form tags -- not absolutely necessary
	- already violating best practices by using inline event handlers
  
    value is the text that is displayed
  
  2. onClick="alert('Hello world!);">
  
*/


<a href="summary-page.html"><img src="button-sum-pg.png"></a>

You can also use an image to trigger an event

<href="https://Facebook.com/"><img src="facebook-icon.png" onClick="openFacebook();">


/*
  Interactive Exercises
  
  - input type value onclick
    <input type="button" value"Submit" onClick="greeting();"></input>

  - Create a button, when clicked, calls the function myFunc
    <input type="button" value="Click" onClick="myFunc();">
  
  - An image when clicked calls the function myFunc 
    <img src="but.gif" onClick="myFunc();"> 
	
  - <input type="button" value="add" onClick="x = true;">
    button called "add", when clicked variable x equals true
	
*/
  
/*

<script>
  function greet() {
    alert("Hello world!");
  }
</script>
<input type="button" value="say hello...!" onClick="greet();">

*/