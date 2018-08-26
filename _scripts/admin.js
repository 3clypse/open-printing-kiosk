var menu = new nw.Menu({ type: 'menubar' });

var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({
    label: 'Salir',
    click: function(){
        nw.App.quit();
    }
}));

menu.append(new nw.MenuItem({
    label: 'Archivo',
    submenu: submenu
}));
menu.append(new nw.MenuItem({
    label: 'Servicios',
    click: function(){
        console.log('open new page');
        var parentWin = window;

        if(parentWin.localStorage.getItem('child_open')) {
            console.log('child window is already open');
            return;
        }

        nw.Window.open('https://google.es', {}, function(win) {
            parentWin.localStorage.setItem('child_open', true);

            win.on('closed', function() {
                parentWin.localStorage.removeItem('child_open');
            });
        });
    }
}));

nw.Window.get().menu = menu;
