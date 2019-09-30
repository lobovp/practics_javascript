//С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
// 7 * 1 = 7
// 7 * 2 = 14
let out = document.getElementById("out");
let num = 7;
let temp = '';

for (let i = 1; i <= 9; i ++){
    temp += 7 + ' * ' + i + ' =' + (num * i) + '<br>';//перевод на другую строку
}
out.innerHTML = temp;
