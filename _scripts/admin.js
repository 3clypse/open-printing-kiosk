var $ = require('jquery');
window.jQuery = $;
$(document).ready(runApp)

var fs = require('fs');
var gui = require('nw.gui')
var sha512 = require('js-sha512');

function runApp () {
  $('a[href="#modPass"]').click(function () {
      var pass = prompt("Clave de acceso nueva", "");
      if(pass != null){

        raw = {  
            "hash": sha512(pass)
        };            

        console.log(raw)
        data = JSON.stringify(raw);
        console.log(data)
        fs.writeFileSync('./hash.config.json', data, {encoding:'utf8',flag:'w'}); 

        alert("La clave se ha cambiado con éxito.")
      }
  });


  $('a[href="#cups"]').click(function () {
      var internet = gui.Window.open('http://localhost:631', {
            focus: true,
            new_instance: true,
            id: 'cups'
      })
  });


}