function addAppIcon(icon, action) {
  $("#menuButtons").append('<i onclick="' + action + '" class="menuButton fa ' + icon + '"></i>');
}
