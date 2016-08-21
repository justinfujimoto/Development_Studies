40-switch statements: How to complete them

/*

  - keeps all statements below true case from executing - break;
  

  switch(age) {
  case 21 :
    alert("You're legal");
	break;
  }
  

  - catch-all clause that specifies what happens if none of the above 
  cases are true. ("else")
    - default :
	

	var group = "duo";
	switch(group) {
	case "solo" :
	  performers = 1;
	case "duo" :
	  performers = 2;
	case "trio" :
	  performers = 3;
	}
	
	//perfromers will equal 3, since there are no break; statements, also variable reassigns from 2 to 3
	
	