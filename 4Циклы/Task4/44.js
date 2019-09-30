//Вывести все годы с 1983 до 2017.
let out = document.getElementById("out");

let temp = '';
for (let i = 1983; i <= 2017; i++){
    temp += i + ' ';
}
out.innerHTML = temp;
