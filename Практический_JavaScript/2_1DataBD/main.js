//создаем переменные
let currentYear = 2019;
let bD = +prompt("Введите год вашего рождения",'2019');
let name = prompt("Введите Ваше имя",'Василий');

let year = currentYear - bD;
let out = document.querySelector('#out');
out.innerHTML = name + " Вам <b><i>" + year + "</i></b> года";