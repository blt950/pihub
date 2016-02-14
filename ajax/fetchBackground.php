<?php

$picOfToday = file_get_contents("http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US");
$picOfToday = json_decode($picOfToday, true);
$picOfToday = "http://bing.com".$picOfToday["images"][0]["url"];

echo $picOfToday;

?>