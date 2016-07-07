
//Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready( runApp );

//Container for your app's custom JS
function runApp() {



	$('#test').click( function() {
	    console.log('BIEEEEN');
	    ugui.helpers.runcmd('chromium');
	});

    //CUSTOM JS FOR YOUR APP GOES HERE



}// end runApp();
