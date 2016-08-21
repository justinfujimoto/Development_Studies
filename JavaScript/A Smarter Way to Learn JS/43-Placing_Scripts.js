43-Placing Scripts

/*

  Best place to put embed JS
    - <body> in the end of the body </body>
	
  Code to embed <script src="scripts.js></scripts>
	
*/

/*

	order of HTML code is important
	
	JS functions, are loaded into memory when the pages loads
	
	Once the page is loaded, all the JS code stays in memory, ready to execute, for as long as the page
	is displayed
	
	You can legally put JS code almost anywhere in the HTML file
	
	Best place for scripts is at the end of the body section
	
	Guarantees that CSS styling and images display won't get held up while scripts are loading
	
	Example names:
	
	scripts.js
	coreJS.js
	main-code.js
	main_code.js
	main.code.js
  
	<script src="whatever.js"></script>

*/