const con = require("./connection");

con.query("SELECT * FROM`Department`", function (err, result) {
  if (err) {
    return console.error("Не удалось сделать запрос: " + err.message);
  } else {
    console.log(result);
  }
});

// Функция для закрытия соединения с базой данных
function closeConnection() {
  if (con) {
    con.end((err) => {
      if (err) {
        console.error("Ошибка при закрытии соединения с базой данных:", err);
      } else {
        console.log("Соединение с базой данных успешно закрыто.");
      }
    });
  }
}
closeConnection();

// Экспорт функций
module.exports = {
  con,
  closeConnection,
};
