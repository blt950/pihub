function ruter_init() {
  addAppIcon("fa-bus", "toggleMenu('ruterMenu')");

  addBodyHTML('<div id="ruterMenu" style="background:rgba(255, 255, 255, 0.8); color: black; width: 250px;" class="menu menu-right">\
		<div class="mHeader" style="color: white;"><h1><i class="fa fa-bus"></i>&nbsp;&nbsp;Avganger</h1></div>\
		<div id="ruterRealtime"></div>\
	</div>');

  toggleMenu('ruterMenu'); // Fixes it's position, though it's not closed (bug)

  updateRuter();

}

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

			if(data.length == 0) {
				html = '<div style="width: 100%; text-align:center; padding-top: 10px;">Det er ingen avganger<br /> for øyeblikket!</div>'
			} else {
				while(results < maxResults){

					if(i >= maxResults*4) break; // Breaks a infite loop after few attempts.

					if(typeof data[i] != "undefined" && data[i]["DirectionRef"] == 1){

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
			}

		$("#ruterRealtime").html(html);
		var ruterTimer = setTimeout(updateRuter, 5000);

		}
	});
}