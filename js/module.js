var loadedModules = []

$(function(){
  modules.forEach(function(module) {
    loadModule(module);
  });
})


//Function to load modules
function loadModule(module) {
  //Load module
  $.getScript("modules/"+module+"/"+module+".js", function(data, textStatus, jqxhr) {
    //Store the module in loaded array
    loadedModules.push(module);
    //Execute the module
    window[module + "_init"]();
  });
}
