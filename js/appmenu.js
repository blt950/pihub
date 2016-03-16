function addAppIcon(icon, action) {
  $("#menuButtons").append('<i id="showRuterButton" onclick="window[' + action + ']()" class="menuButton fa ' + icon + '"></i>');
}
