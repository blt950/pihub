
/* 
*  ===============================
*			Background
*  ===============================
*/

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

/* 
*  ===============================
*			  Weather
*  ===============================
*/

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


/* 
*  ===============================
*	       Ruter Realtime
*  ===============================
*/ 

function updateRuter(){

    var html = "";
    var url = 'http://api.ruter.no/ReisRest/RealTime/GetRealTimeData/3010370';
    
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'jsonp',
        success: function(data){

            var maxResults = 6;
            var i = 0; var results = 0;

            while(results < maxResults){

                if(data[i]["DirectionRef"] == 1){

                    var line = data[i]["LineRef"];
                    var dest = data[i]["DestinationName"];

                    var time = data[i]["ExpectedArrivalTime"];
                    var time = time.substr(6, 13);

                    var now = Date.now();

                    if(time - now < 630000){ // if under 10.5 minutes
                        if(time - now < 45000){
                            time = "nå";
                        } else {
                            time = Math.round((time-now)/1000/60);
                            time = time + " min";
                        }
                
                    } else {
                        time = new Date(time*1000/1000); // I've no idea why I need to do *1000/1000, but it fixes invalid date error.
                        time = time.getHours() + ":" + checkTime(time.getMinutes());
                    }

                    html = html + "<div id='transportLine'><div class='metroLine line"+line+"'>"+line+"</div><div class='metroText'>"+dest+": "+time+"</div></div>"
                    results++;
                }

                i++;

            }

            document.getElementById('ruterRealtime').innerHTML = html;
            var ruterTimer = setTimeout(updateRuter, 50000);
            
        }
    });
}