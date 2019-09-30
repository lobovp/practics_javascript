//Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
let out = document.getElementById("out");

let sum = 0;
let tmp = '';

for (let i = 0; i <= 100; i ++){
    sum += + i;
}
tmp = 'Сумма чисел от 0 до 100 равна: ' + sum;
out.innerHTML = tmp;
