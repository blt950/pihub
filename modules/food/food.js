function food_init() {
  window_create('foodMenu', 'Food');
  $("#windowfoodMenucontent").append('<iframe src="http://www.matprat.no/" style="width: 100%; height: 100%;"></iframe>');
  addAppIcon("fa-cutlery", "window_open('foodMenu')");
}
