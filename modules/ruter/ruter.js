function ruter_init() {
  addAppIcon("fa-bus", "toggleMenu('ruterMenu')");

  $("body").append('<div id="ruterMenu" style="background:rgba(255, 255, 255, 0.8); color: black; width: 250px;" class="menu menu-right">\
		<div class="mHeader" style="color: white;"><h1><i class="fa fa-bus"></i>&nbsp;&nbsp;Avganger</h1></div>\
		<div id="ruterRealtime"></div>\
	</div>');

  toggleMenu('ruterMenu');

}