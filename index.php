<!DOCTYPE html>
<html>
<head>
	<title>Raspberry Hub</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="menu.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<script src="js/simpleWeather.min.js" type="text/javascript"></script>
	<script src="js/classie.js" type="text/javascript"></script>
	<script src="js/menu.js" type="text/javascript"></script>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,900italic,100italic,300italic,300,700,700italic,900,500italic,500,400italic' rel='stylesheet' type='text/css'>

	<script>
	function startUp(){
		fetchBackground();
		updateClock();
		updateWeather();
	}

	//
	// Fetching background and applying
	//

	function fetchBackground(){
		$.get("ajax/fetchBackground.php", function(data, status){
			setBackground(data);
		});

		var backgroundTimer = setTimeout(fetchBackground, 60000);
	}

	function setBackground(backgroundUri){
		$("html").css({"background":"url("+backgroundUri+") no-repeat center center fixed"});
		$("html").css({"-webkit-background-size":"cover"}, {"-moz-background-size":"cover"}, {"-o-background-size":"cover"}, {"background-size":"cover"});
	}

	//
	// Updating the clock and date
	//

	function updateClock() {
	    var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    h = checkTime(h);
	    m = checkTime(m);

	    var mo = today.getMonth();
	    var month = "nil";

	    switch(mo){
	    	case 1: month = "januar"; break;
	    	case 2: month = "februar"; break;
	    	case 3: month = "mars"; break;
	    	case 4: month = "april"; break;
	    	case 5: month = "mai"; break;
	    	case 6: month = "juni"; break;
	    	case 7: month = "juli"; break;
	    	case 8: month = "august"; break;
	    	case 9: month = "september"; break;
	    	case 10: month = "oktober"; break;
	    	case 11: month = "november"; break;
	    	case 12: month = "desember"; break;
	    	default: month = "error"; break;
	    }

	    document.getElementById('time').innerHTML = h + ":" + m;
	    document.getElementById('date').innerHTML = today.getDate() + ". " + month;

	    var clockTimer = setTimeout(updateClock, 500);
	}
	
	function checkTime(i) {
	    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	    return i;
	}

	//
	// Weather update
	//

	function updateWeather(){
	  	$.simpleWeather({
	    location: 'Oslo, Norway',
	    woeid: '',
	    unit: 'c',
	    success: function(weather) {
	      html = '<h2><i class="weathericon icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	      html += '<span class="weatherDesc">'+weather.currently+'</span>';
	  
	      $("#weather").html(html);
	    },
	    error: function(error) {
	      $("#weather").html('<p>'+error+'</p>');
	    }
	  });
	  var weatherTimer = setTimeout(updateWeather, 60000);
	}

	</script>

</head>
<body onload="startUp()">

	<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
		<h3><i class="fa fa-bus"></i>&nbsp;&nbsp;Avganger</h3>

		<div id="transportLine">
			<div class="metroLine">4</div>
			<div class="metroText">Ringen: 5 min</div>
		</div>
		
		<div id="transportLine">
			<div class="metroLine">3</div>
			<div class="metroText">Mortensrud: 7 min</div>
		</div>

		<div id="transportLine">
			<div class="metroLine">6</div>
			<div class="metroText">Sognsvann: 12:53</div>
		</div>
		
	</nav>

	
	<div id="menuButtons">
		<i id="showRight" class="menuButton fa fa-bus"></i>
	</div>

	<div id="weather"></div>

	<div id="clock">
		<h1 class="clock"><div id="time">15.45</div></h1>
		<h3 class="clock"><div id="date">6th February</div></h3>
	</div>
</body>
</html>