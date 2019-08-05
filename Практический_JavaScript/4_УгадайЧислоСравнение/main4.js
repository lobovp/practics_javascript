'use strict';
/*====Угадай число=====*/
//переменные
let randomNum = Math.round(-0.5 + Math.random()*(9 + 1));
console.log(randomNum);

//событие
let numIn = document.querySelector("#user-num");
document.querySelector("#btn").onclick = checkNum;

//функция
function checkNum() {
    let num = parseInt(numIn.value);
    if (!isNaN(num) && num >= 0 && num <= 10) {
        if (num === randomNum) {
            alert('Победа!!!');
            location.reload();//перезагрузка страницы
        } else if (num < randomNum) {
               alert('Вы не угадали :(, число меньше задуманного');
            }else {
                alert('Вы не угадали :(, число больше задуманного');
            }
    } else {
        alert("Вы ввели не точные данные");
        }
// очистка input
 numIn.value = '';
}

//console.log(numIn);

/*==== Задание 2 =======*/

//переменные
let count = 0;//переменная для счетчика
let btn1 = document.querySelector('#btn1');

//событие
btn1.onclick = function () {
    count++;
    if (count === 1){
        btn1.innerHTML = "Not click";
        alert("Осталось 2 попытки");
    }
    if (count === 2){
        btn1.style.display = 'none';
    }
};
/*====== Задание 3 =========*/
//переменные
let oneNum = document.querySelector('#user-num1');
let twoNum = document.querySelector('#user-num2');
let btn3 = document.querySelector('#btn3');


//событие

btn3.onclick = function () {
/*console.log(oneNum.value);
console.log(twoNum.value);*/
    let num1 = parseInt(oneNum.value);
    let num2 = parseInt(twoNum.value);
    if (!isNaN(num1)&& !isNaN(num2)){
        if (parseInt(oneNum.value) < parseInt(twoNum.value)) {
            alert(twoNum.value);
        }else {
        alert(oneNum.value);
        }
    location.reload();
    }else {
        alert("Введите число");
    }
    oneNum.value= '';
    twoNum.value= '';
};
/*======= Задание4 =======*/
//переменные
let userDay = document.querySelector('#user-day');
let userMon = document.querySelector('#user-mon');
let btn4 = document.querySelector('#btn4');

//событие
btn4.onclick = function () {
    //console.log(userDay.value);
    //console.log(userMon.value);
    let d = parseInt(userDay.value);
    let m = parseInt(userMon.value);
    if (d <= 31 && m <= 12) {
        if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) alert("Овен");
        if ((m === 4 && d >= 20) || (m ===5 && d <= 20)) alert("Телец");
        if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) alert("Близнецы");
        if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) alert("Рак");
        if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) alert("Лев");
        if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) alert("Дева");
        if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) alert("Весы");
        if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) alert("Скорпион");
        if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) alert("Стрелец");
        if ((m === 12 && d >= 21) || (m === 1 && d <= 19)) alert("Козерог");
        if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) alert("Водолей");
        if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) alert("Рыбы");
    }else {
        alert("Введите корректно числа");
    }
    location.reload();
};
//====== Задание 5 ========//
//переменные
let userYear = document.querySelector("#user-year");

//событие
document.querySelector("#btn5").onclick = function () {
    let year = parseInt(userYear.value);
    console.log(year);
    if(!isNaN(year) && year !== 0){
        if (year % 12 === 0){
            alert("Ваш знак: Обезьяны!")
        }
        if (year % 12 === 1){
            alert("Ваш знак: Петуха!")
        }
        if (year % 12 === 2){
            alert("Ваш знак: Собаки!")
        }
        if (year % 12 === 3){
            alert("Ваш знак: СВИНЬИ!")
        }
        if (year % 12 === 4){
            alert("Ваш знак: КРЫСЫ!")
        }
        if (year % 12 === 5){
            alert("Ваш знак: БЫКА!")
        }
        if (year % 12 === 6){
            alert("Ваш знак: ТИГРА!")
        }
        if (year % 12 === 7){
            alert("Ваш знак: КРОЛИКА!")
        }
        if (year % 12 === 8){
            alert("Ваш знак: ДРАКОНА!")
        }
        if (year % 12 === 9){
            alert("Ваш знак: ЗМЕИ!")
        }
        if (year % 12 === 10){
            alert("Ваш знак: ЛОШАДИ!")
        }
        if (year % 12 === 11){
            alert("Ваш знак: КОЗЫ!")
        }
    }else {
        alert("Введите корректное число");
    }
    location.reload();
};

