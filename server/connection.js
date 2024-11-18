//подкючение к базе данных sql
const mysql = require("mysql2");
//создаём подключение
const connection = mysql.createConnection({
  host: "MySQL-8.2",
  user: "root",
  database: "Inspection_Department",
  password: "",
});
// тестирование подключения (ловим ошибку)
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка подключения: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

module.exports = connection;
