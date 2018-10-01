$(document).ready(runApp)

var fs = require('fs');
var sha512 = require('js-sha512');
var gui = require('nw.gui')
var win = gui.Window.get();

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