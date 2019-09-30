//Вывести числа от 4 до 400 на экран.
let out = document.getElementById("out");
let tmp = '';

for (let i = 4; i <=400; i++ ){
    tmp =tmp + i + ' ';
}
out.innerHTML = tmp;