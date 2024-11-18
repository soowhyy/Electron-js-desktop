const path = require("path");
const url = require("url");
const { app, BrowserWindow } = require("electron");

// настройка electron
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "../img/database_icon.png"),
  });
  win.loadFile("html/register.html");

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
//....................
