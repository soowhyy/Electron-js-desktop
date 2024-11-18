//Darkmode
const body = document.querySelector("body");
sidebar = body.querySelector(".sidebar");
toggle = body.querySelector(".toggle");
modeSwitch = body.querySelector(".toggle-switch");
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Светлая тема";
  } else {
    modeText.innerText = "Тёмная тема";
  }
});
//

//Стиль таблицы
const table = document.querySelector(".table");
modeTable = document.querySelector(".table-style");

modeTable.addEventListener("click", () => {
  if (table.classList.contains("table")) {
    table.classList.replace("table", "zebra"); // Заменить класс "table" на "zebra"
  } else {
    table.classList.replace("zebra", "table"); // Заменить класс "zebra" на "table"
  }
});
