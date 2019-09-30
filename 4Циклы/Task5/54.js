//Вывести числа -4 -2 0 2 4 6 ...100.
let out = document.getElementById("out");

let temp = '';
for (let i = -4; i <= 100; i = i + 2){
    temp += i + ' ';
}
out.innerHTML = temp;
