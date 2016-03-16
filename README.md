# pihub
<h4>How to install modules:</h4>
<b>1.</b> Place the module folder into <b>modules</b> folder in the root of the project.<br />
<b>2.</b> Locate the config.js file in the root directory, add the modules name into the modules array.<br />
<br />
<h4>How to create a module</h4>
Creating modules for PiHub, is incredibly easy. A few simple steps is all thats required!<br />
Start by creating a folder in the modules directory, for this guide we will be creating a simple alert module with a icon.<br />
<br />
Create the folder "alertbutton" in modules directory, then create a js file with the same name inside that folder.<br />
At this point you should have /modules/alertbutton/alertbutton.js created, then add the following code:<br /><br />
<b>alertbutton.js</b>
<pre>
function alertbutton_init() {
  addAppIcon("fa-exclamation-triangle", "alert('Hello World!')");
}
</pre>
<br />
Youre done, it's that easy! Now head over to your config.js and add "alertbutton" into the array, and watch the button automaticly appear.<br />
<br />
<i>More advanced functions to come, undocumented example usage required is loadCSS which will load css files in a modules css folder.</i>
