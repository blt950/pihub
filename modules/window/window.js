function window_init() {
  loadCSS('window', 'window.css')
}

function window_create(windowName, title) {
  $('body').append('<div id="window'+windowName+'" class="window_window"><div class="window_header"><div class="window_button">&nbsp;</div><div class="window_title">'+title+'</div><div class="window_button"><i class="fa fa-times" onclick="window_close(\''+windowName+'\')"></i></div><br style="clear: both;" /></div><div id="window'+windowName+'content" class="window_content"></div></div>');
}

function window_open(windowName) {
    $('#window'+windowName).fadeIn();
}

function window_close(windowName) {
  $('#window'+windowName).fadeOut();
}

function window_get(windowName) {
  return $('#window'+windowName)
}
