//Вывести числа 654 653 652 до нуля.
let out = document.getElementById("out");

let temp = '';
for (let i = 654; i >= 0; i--){
    temp += i + ' ';
}
out.innerHTML = temp;
