
function settings_init() {
	// Add the menu icon
    addAppIcon("fa-cog", "toggleMenu('settingsMenu')");

    // Add the menu itself
	addBodyHTML('<div id="settingsMenu" style="background:rgba(255, 255, 255, 1); height: 200px;" class="menu menu-bottom">\
	<div style="width: 50%; float: left; padding: 20px; color: black;">\
	  <b>Brightness</b>:<br />\
	  <div id="brightness"></div>\
	</div>\
	<br style="clear: both;" />\
	</div>');

	//Append the brightness filter
	addBodyHTML('<div id="brightnessfilter" onclick="closeAllMenus()" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 10000; pointer-events: none; background:rgba(0, 0, 0, 0)"></div>');
}


$(function(){
  //Jquery UI for brightness
  $("#brightness").slider({
    min: 0,
    max: 80,
    value: 0,
    slide: function( event, ui ) { updateBrightness(ui.value) }
  });
});

function updateBrightness(value) {
  $("#brightnessfilter").css('background', 'rgba(0, 0, 0, '+(value / 100)+')')
}