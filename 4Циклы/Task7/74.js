//Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;
let out = document.getElementById("out");

let temp = '';

for (let i = 1000; i <= 2000; i ++){
    temp =temp + '&#' + i + ' ';
}
out.innerHTML = temp;
