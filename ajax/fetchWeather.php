<?php
    $xml=simplexml_load_file("http://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/varsel_time_for_time.xml") or die("Error: Cannot create object");

    $weatherID = $xml->forecast->tabular->time[0]->symbol['number'];
    $weatherDesc = $xml->forecast->tabular->time[0]->symbol['name'];
    $temperature = $xml->forecast->tabular->time[0]->temperature['value'];
    $windSpeed = $xml->forecast->tabular->time[0]->windSpeed['name'];

    if ($xml->forecast->tabular->time[0]->temperature['unit'] == "celsius"){
        $tempUnit = "C";
    } else {
        $tempUnit = "F";
    }


    echo '<h2><i class="weathericon icon-'.$weatherID.'"></i>'.$temperature.'&deg;'.$tempUnit.'</h2>';
    echo '<span class="weatherDesc">'.$windSpeed.'</span>';
?>
