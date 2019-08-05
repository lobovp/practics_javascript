/*==== Задание1 ======*/
//получаем кнопку
let btn = document.querySelector('#btn');

//создаем событие для кнопки
btn.onclick = print;

//создаем  фукцию для вывода на печать
function print() {
    document.querySelector("link").href = 'style_print.css';
    //document.querySelector("#btn").style.display= "none";
    document.querySelector("#btn").hidden= true;
}

/*==== Задание2 ======*/
    document.querySelector("#btn2").onclick = function () {
    document.querySelector("#p-task2").innerHTML+=' word';
};
/*==== Задание3 ======*/
    document.querySelector("#btn3").onclick = function () {
    document.querySelector("#p-task3").insertAdjacentHTML('afterbegin', '222 ');
    console.log(document.querySelector("#p-task3"));
};
/*==== Задание4 ======*/
    document.querySelector("#btn4").onclick = function () {
    document.querySelector("#p-task4").insertAdjacentHTML('beforebegin', '111');
    console.log(document.querySelector("#p-task4"));
};
/*==== Задание5 ======*/
    document.querySelector("#btn5").onclick = function () {
    document.querySelector("#p-task5").insertAdjacentHTML('beforeend', ' 333');
    console.log(document.querySelector("#p-task5"));
};
/*==== Задание6 ======*/
    document.querySelector("#btn6").onclick = function () {
    //document.querySelector("#p-task6").innerHTML = '<b> HI </b>';
    document.querySelector("#p-task6").innerText = '<b> HI </b>';

};
/*==== Задание7 ======*/
    document.querySelector("#btn7").onclick = function () {
    //document.querySelector("#p-task7").outerHTML = '<b> HI </b>';
    document.querySelector("#p-task7").outerText = '<b> HI </b>';
};
