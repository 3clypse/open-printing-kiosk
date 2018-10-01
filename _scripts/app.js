// Wait for the document to load and for ugui.js to run before running your app's custom JS
$(document).ready(runApp)

var adminTriesNumber = 0
var fs = require('fs');
var sha512 = require('js-sha512');
var gui = require('nw.gui')
var win = gui.Window.get();


function readAdmin () {
  var data = fs.readFileSync('./hash.config.json')
  var config = JSON.parse(data)
  return config.hash  
}


function runApp () {

  //When you click on the exit in the navigation, close this instance of NW.js
  $('a[href="#exit"]').click( function() {
      nw.App.quit();
  });

  //When you click on the exit in the navigation, close this instance of NW.js
  $('a[href="#appExit"]').click( function() {
      nw.Window.get().close();
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
      config = readAdmin()

      if (adminTriesNumber < 3) {
          var pass = prompt("Clave de acceso", "");
          if(pass != null && sha512(pass)==readAdmin()){
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

  $('a[href="#modPass"]').click(function () {
      //var pass = prompt("Clave de acceso nueva", "");
      alert("La clave se ha cambiado con éxito.")
      if(pass != null){

        raw = {  
            "hash": sha512(pass)
        };            

        data = JSON.stringify(raw);
        fs.writeFileSync('./hash.config.json', data, {encoding:'utf8',flag:'w'}); 

        alert("La clave se ha cambiado con éxito.")
      }
  });

  $('a[href="#cups"]').click(function () {
      var cups = window.open('http://localhost:631', {
            focus: true,
            new_instance: true,
            fullscreen: true,
            id: 'cups'
      },'height='+screen.height+', width='+screen.width)
  });


}// end runApp();
