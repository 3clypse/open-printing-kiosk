// Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready(runApp)

// Container for your app's custom JS
function runApp () {
  var gui = require('nw.gui')

  $('a[href="#internet"]').click(function () {
      var internet = gui.Window.open('browser.htm', {
            fullscreen: true,
            focus: true,
            new_instance: true,
            id: 'browsing'
      });
  });

  $('a[href="#5dmin"]').click(function () {
      var admin = gui.Window.open('admin.htm', {
        focus: true,
        fullscreen: true,
        new_instance: true,
        id: 'administration'
      });
  });

}// end runApp();
