const { BrowserWindow, app } = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        title:"Time ~anshulbadhani",
        width:300,
        height:230,
        // resizable:true,
        autoHideMenuBar:true,
        alwaysOnTop:true,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile("index.html");
    win.isMenuBarVisible=false;
}
app.whenReady().then(createWindow);
