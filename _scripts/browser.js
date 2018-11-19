var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');

fs.readFile(
    './browser.config.json',
    {
       encoding:'utf8'
    },
    function (err, data) {
        if (err) console.warn(err);

        config=JSON.parse(data);
    }
);

window.addEventListener(
    'DOMContentLoaded',
    initBrowser
);


function initBrowser(){
    nwjsHeader=document.querySelector('header');
    nwjsBrowser=document.querySelector('#browser');

    nwjsHeader.addEventListener('click', navigate);

    nwjsHeader.addEventListener('keyup', go);

    setTimeout(
        function(){
            nwjsBrowser.contentWindow.location.href=config.homepage
            setTimeout(
                function(){
                    nwjsBrowser.style.opacity=1
                    updateAddressBar()
                },600
            );
            nwjsHeader.style.opacity=1;
        },300
    );

    nwjsBrowser.onload = function () {updateAddressBar()}
}

function go(e){
    if(e.keyCode == 13){
      if(e.target.value.indexOf('//') == -1){
          e.target.value='http://'+e.target.value
      }
      nwjsBrowser.contentWindow.location.href=e.target.value
    }
}


function navigate(e){
    switch(e.target.id){
        case 'address' :
            e.target.select()
            updateAddressBar()
            break;
    }
}

function updateAddressBar(){
  nwjsHeader.querySelector('#address').value=nwjsBrowser.contentWindow.location.href
}
