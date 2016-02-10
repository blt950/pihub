<?php

	date_default_timezone_set("Europe/Oslo");

	$content = file_get_contents('http://reisapi.ruter.no/StopVisit/GetDepartures/3010370');
	$array = json_decode($content,TRUE);

	$maxResults = 6;
	$i = 0; $results = 0;
	while($results < $maxResults){

		if($array[$i]["MonitoredVehicleJourney"]["DirectionRef"] == 1){

			$line = $array[$i]["MonitoredVehicleJourney"]["LineRef"];
			$dest = $array[$i]["MonitoredVehicleJourney"]["DestinationName"];

			$time = $array[$i]["MonitoredVehicleJourney"]["MonitoredCall"]["ExpectedArrivalTime"];
			$time = strtotime($time);

			if($time - time() < 630){ // if under 10.5 minutes

				if($time - time() < 45){
					$time = "nå";
				} else {
					$time = round(($time-time())/60);
					$time = $time." min";
				}
		
			} else {
				$time = date("H:i", $time);
			}
			

			echo "
			<div id='transportLine'>
				<div class='metroLine line$line'>$line</div>
				<div class='metroText'>$dest: $time</div>
			</div>";

			$results++;
		}

		$i++;

	}

?>