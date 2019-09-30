//Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
let out = document.getElementById("out");

let temp = '';
for (let i = 4; i <= 13; i = i+3){
    temp += i + ' ';
}
out.innerHTML = temp;
