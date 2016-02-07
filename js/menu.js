window.onload = function(){ 

	var menuRight = document.getElementById( 'cbp-spmenu-s2' );
	var showRight = document.getElementById( 'showRight' );
	var body = document.body;
	var open = false;

	showRight.onclick = function() {
		if(open) open = false; else open = true;
		classie.toggle( menuRight, 'cbp-spmenu-open' );
	};

	$('html').click(function(e) {
		if(!$(e.target).is('#showRight') )
		{
			if(open){
				classie.toggle( menuRight, 'cbp-spmenu-open' );  
				open = false;
			}             
		}	             
	}); 

}