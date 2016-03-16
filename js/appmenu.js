function addAppIcon(icon, action) {
  $("#menuButtons").append('<i id="showRuterButton" onclick="' + action + '" class="menuButton fa ' + icon + '"></i>');
}
