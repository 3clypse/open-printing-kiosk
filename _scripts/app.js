// Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready(runApp)

// Container for your app's custom JS
function runApp () {
	var gui = require('nw.gui')

  $('a[href="#internet"]').click(function () {
	    //console.log("ESTA FUNCIONANDO EL BOTON CON app.js");
			var internet = gui.Window.open('https://www.google.com', {
            frame: true,
            focus: true,
						toolbar: true,
						fullscreen: true,
            id: 'callNotification'
      });
			internet.on ('loaded', function(){
				// internet.enterFullscreen();
			});

	});

}// end runApp();
