$(function(){
  //Append the brightness filter
  $("body").append('<div id="brightnessfilter" onclick="closeAllMenus()" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 10000; pointer-events: none; background:rgba(0, 0, 0, 0)"></div>');

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


function brightness_init() {
  console.log("yeah");
}
