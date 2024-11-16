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
    icon: __dirname + "../img/database_icon.png",
  });
  win.loadFile("html/index.html");

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

//подкючение к базе данных sql
const mysql = require("mysql2");
//создаём подключение
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Inspection_Department",
  password: "",
});
// тестирование подключения (ловим ошибку)
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});
//...............
