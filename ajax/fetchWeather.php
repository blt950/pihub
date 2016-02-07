<?php
	
?>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript">	

		$(document).ready(function() {
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
		  }, setTimeout($.simpleWeather, 1000));
		});

	</script>
</head>
<body>
body
</body>
</html>
