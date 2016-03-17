
/*
*  ===============================
*			Background
*  ===============================
*/

function fetchBackground(){
	$.get("ajax/fetchBackground.php", function(data, status){
		setBackground(data);
	});
}

setTimeout(function () {
	fetchBackground();
}, 60000);

function setBackground(backgroundUri){
	$("html").css({"background":"url("+backgroundUri+") no-repeat center center fixed"});
	$("html").css({"-webkit-background-size":"cover"}, {"-moz-background-size":"cover"}, {"-o-background-size":"cover"}, {"background-size":"cover"});
}



/*
*  ===============================
*		  Clock and date
*  ===============================
*/

function updateClock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);

    var mo = today.getMonth();
    var month = "nil";

    console.log(mo);

    switch(mo){
    	case 0: month = "januar"; break;
    	case 1: month = "februar"; break;
    	case 2: month = "mars"; break;
    	case 3: month = "april"; break;
    	case 4: month = "mai"; break;
    	case 5: month = "juni"; break;
    	case 6: month = "juli"; break;
    	case 7: month = "august"; break;
    	case 8: month = "september"; break;
    	case 9: month = "oktober"; break;
    	case 10: month = "november"; break;
    	case 11: month = "desember"; break;
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

/*
*  ===============================
*			  Weather
*  ===============================
*/

function updateWeather(){

    $.get("ajax/fetchWeather.php", function( data ) {
        $("#weather").html(data);
    });

    var weatherTimer = setTimeout(updateWeather, 60000);
}