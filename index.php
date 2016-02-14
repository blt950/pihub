<!DOCTYPE html>
<html>
<head>
	<title>Raspberry Hub</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,900italic,100italic,300italic,300,700,700italic,900,500italic,500,400italic' rel='stylesheet' type='text/css'>

	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<script src="js/simpleWeather.min.js" type="text/javascript"></script>
	<script src="js/menu.js" type="text/javascript"></script>
	<script src="js/ajax.js" type="text/javascript"></script>

	<script>

	function startUp(){
		fetchBackground();
		updateClock();
		updateWeather();
		updateRuter();
	}

	</script>

</head>
<body onload="startUp()">

	<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-ruter">
		<h3><i class="fa fa-bus"></i>&nbsp;&nbsp;Avganger</h3>

		<div id="ruterRealtime"></div>
		
	</nav>

	<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-countdown">
		<h3><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Tidtaker</h3>
	</nav>

	<div id="container">
	
		<div id="menuButtons">
			<i id="showRuterButton" class="menuButton fa fa-bus"></i><br><br>
			<i id="showCountButton" class="menuButton fa fa-clock-o"></i>
		</div>

		<div id="weather"></div>

		<div id="clock">
			<h1 class="clock"><div id="time"></div></h1>
			<h3 class="clock"><div id="date"></div></h3>
		</div>

	</div>

</body>
</html>