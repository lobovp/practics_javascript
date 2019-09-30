//С помощью цикла вывести произведение чисел от 1 до 50.
let out = document.getElementById("out");

let multiply = 1;
let tmp = '';

for (let i = 1; i <= 50; i ++){
    multiply = multiply * i;
}
tmp = 'Произведение чисел от 0 до 50 равно: ' + multiply;
out.innerHTML = tmp;
