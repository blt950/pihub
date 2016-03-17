/*=================**
**     SETTINGS    **
**=================**/

// Animation Speed
var animSpeed = 300;

//Variables used by the system
var menuInit = 0;

var toggledMenus = [];
var togglingMenu = 0;


// Function to add new app icons
function addAppIcon(icon, action) {
  $("#menuButtons").append('<i onclick="' + action + '" class="menuButton fa ' + icon + '"></i>');
}

function initMenu() {
  //Init Menus
  $('.menu').each(function(i, obj) {

    //Code for right menu
    if($(this).hasClass("menu-right")) {
      $(this).css('right', '-' + $(this).width() + 'px');
    }

    //Code for left menu
    if($(this).hasClass("menu-left")) {
      $(this).css('left', '-' + $(this).width() + 'px');
    }

    //Code for bottom menu
    if($(this).hasClass("menu-bottom")) {
      $(this).css('bottom', '-' + $(this).width() + 'px');
    }
  });
  if(menuInit == 0) {
    $("body").append('<div id="bodyOverlay" onclick="closeAllMenus()" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 100; display: none;"></div>');
  }
  return 0;
}

function toggleMenu(menu) {
  if(togglingMenu == 0) {
    togglingMenu = 1;
    if($.inArray(menu, toggledMenus) == 0) {
      closeMenu(menu);
      return 1;
    } else {
      openMenu(menu);
      return 1;
    }
  }
  return 0;
}

function openMenu(menu) {
  $("#bodyOverlay").show();
  toggledMenus.push(menu);

  //Code for right menu
  if($("#" + menu).hasClass("menu-right")) {
    $("#" + menu).animate({
      right: 0
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }

  //Code for left menu
  if($("#" + menu).hasClass("menu-left")) {
    $("#" + menu).animate({
      left: 0
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }

  //Code for bottom menu
  if($("#" + menu).hasClass("menu-bottom")) {
    $("#" + menu).animate({
      bottom: 0
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }
}

function closeMenu(menu) {
  $("#bodyOverlay").hide();
  toggledMenus = jQuery.grep(toggledMenus, function(value) {
    return value != menu;
  });

  //Code for right menu
  if($("#" + menu).hasClass("menu-right")) {
    $("#" + menu).animate({
      right: '-' + $("#" + menu).width()
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }

  //Code for left menu
  if($("#" + menu).hasClass("menu-left")) {
    $("#" + menu).animate({
      left: '-' + $("#" + menu).width()
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }

  //Code for bottom menu
  if($("#" + menu).hasClass("menu-bottom")) {
    $("#" + menu).animate({
      bottom: '-' + $("#" + menu).height()
    }, animSpeed, function() {
      togglingMenu = 0;
    });
  }
}

function closeAllMenus() {
  $.each(toggledMenus, function (index, value) {
    closeMenu(value);
  });
  return 0;
}
