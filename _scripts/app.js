
//Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready( runApp );

//Container for your app's custom JS
function runApp() {

	$('#chromium').click( function() {
	    ugui.helpers.runcmd('chromium --incognito --start-maximized https://google.com');
	});

	$('#file').click( function() {
	    ugui.helpers.runcmd('nemo --no-desktop');
	});



}// end runApp();
