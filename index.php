<!DOCTYPE html>
<html>
<head>
	<title>Raspberry Hub</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link href="//fonts.googleapis.com/css?family=Roboto:400,100,900italic,100italic,300italic,300,700,700italic,900,500italic,500,400italic" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">

	<script src="//code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<script src="config.js" type="text/javascript"></script>
	<script src="js/simpleWeather.min.js" type="text/javascript"></script>
	<script src="js/menu.js" type="text/javascript"></script>
	<script src="js/ajax.js" type="text/javascript"></script>
	<script src="js/brightness.js" type="text/javascript"></script>
	<script src="js/module.js" type="text/javascript"></script>
	<script src="js/appmenu.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>


</head>
<body>
	<div id="menu1" style="background:rgba(255, 255, 255, 0.8); color: black; width: 250px;" class="menu menu-right">
		<div class="mHeader" style="color: white;"><h1><i class="fa fa-bus"></i>&nbsp;&nbsp;Avganger</h1></div>
		<div id="ruterRealtime"></div>
	</div>

	<div id="menu2" style="background:rgba(255, 255, 255, 0.8); width: 250px;" class="menu menu-left">
		<h3><i class="fa fa-clock-o"></i>&nbsp;&nbsp;Tidtaker</h3>
	</div>

	<div id="menu3" style="background:rgba(255, 255, 255, 1); height: 200px;" class="menu menu-bottom">
		<div style="width: 50%; float: left; padding: 20px; color: black;">
			<b>Brightness</b>:<br />
			<div id="brightness"></div>
		</div>
		<br style="clear: both;" />
	</div>

	<div id="weather"></div>

	<div id="container">

		<div id="menuButtons">
			<i id="showRuterButton" onclick="toggleMenu('menu1')" class="menuButton fa fa-bus"></i>
			<i id="showCountButton" onclick="toggleMenu('menu2')" class="menuButton fa fa-clock-o"></i>
		</div>


		<div id="clock">
			<h1 class="clock"><div id="time"></div></h1>
			<h3 class="clock"><div id="date"></div></h3>
		</div>

	</div>

	<script>
	$(function() {
		initMenu();
		fetchBackground();
		updateClock();
		updateWeather();
		updateRuter();
	});
	</script>

</body>
</html>
