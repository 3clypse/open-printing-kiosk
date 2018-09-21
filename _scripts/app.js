// Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready(runApp)
var adminTriesNumber = 0



function runApp () {
  var gui = require('nw.gui')

  //When you click on the exit in the navigation, close this instance of NW.js
  $('a[href="#exit"]').click( function() {
      nw.App.quit();
  });

  $('a[href="#internet"]').click(function () {
      var internet = gui.Window.open('browser.htm', {
            fullscreen: true,
            focus: true,
            new_instance: true,
            id: 'browsing'
      });
  });

  $('a[href="#5dmin"]').click(function () {
      if (adminTriesNumber < 3) {
          var pass = prompt("Clave de acceso", "");
          if(pass != null && pass=='0000'){
            var admin = gui.Window.open('admin.htm', {
              focus: true,
              fullscreen: true,
              new_instance: true,
              id: 'administration'
            });
          }
          else{
            adminTriesNumber++
            alert("La clave introducida es incorrecta.")
          }
      }
      else{
        alert("Demasiados intentos fallidos.")
      }
  });

}// end runApp();
