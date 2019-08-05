'use strict';
/*========== Задание 1========*/
//переменные
let p = document.querySelector('p');

for (let i = 0; i <= 100; i++) {
    p.innerHTML += i + " ";
}
/*========== Задание 2 ========*/
//переменные
let p2 = document.querySelector('#p2');

for (let i = 0; i <= 101; i = i + 2) {
    p2.innerHTML += i + " ";
}
/*========== Задание 3 ========*/
//переменные
let p3 = document.querySelector('#p3');

for (let i = 200; i >= 0; i--) {
    p3.innerHTML += i + " ";
}
/*========== Задание 4 ========*/
//переменные
let p4 = document.querySelector('#p4');
let sum = 0;

//функция
function sumTo(a) {
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    p4.innerHTML = sum;
}

sumTo(100);

/*========== Задание 5 ========*/
//переменные
let userNum5 = document.querySelector('#user-num5');
let userNum51 = document.querySelector('#user-num51');
let btn5 = document.querySelector('#btn5');
let p5 = document.querySelector("#p5");


//событие
btn5.onclick = pow;

//функция
function pow() {
    let num1 = userNum5.value;
    let num2 = userNum51.value;
    p5.innerHTML = "Результат: ";
    let sum = num1;
    for (let i = 1; i < num2; i++) {
        sum *= num1;
    }
    p5.innerText += sum;
    userNum5.value = "";
    userNum51.value = "";
}

/*========== Задание 6 ========*/
let p6 = document.querySelector("#p6");

function toMultiply() {
    let num = 7;
    let multi;
    for (let i = 1; i <= 9; i++) {
        multi = num * i;
        p6.innerHTML += num + ' * ' + i + " = " + multi + '<br>';
    }
}

toMultiply();


/*========== Задание 7 ========*/
let p7 = document.querySelector("#p7");
let multiNum = 1;

function multiply7() {
    for (let i = 1; i <= 50; i++) {
        multiNum *= i;
    }
    p7.innerHTML += " " + multiNum;
}

multiply7();

/*========== Задание 8 ========*/

let p8 = document.querySelector("#p8");

function cpecChar() {
    for (let i = 1000; i <= 2000; i++) {
        p8.innerHTML += '&#' + i + " ,  ";
    }
}

cpecChar();

/*========== Задание 9 ========*/

//переменная
let div = document.querySelectorAll("div.main p");
console.log(div);

//функция
/*function addP() {
    for (let i = 0; i <= div.length; i++) {
       div[i].insertAdjacentHTML("afterbegin", (i + 1) + ". ");
    }
}
addP();*/

/*========== Задание 10 ========*/
//переменные
let userData1 = document.querySelector("#user-data1");
let userData2 = document.querySelector("#user-data2");
let btn10 = document.querySelector("#btn10");
let out10 = document.querySelector("#out10");

let zodiak = ["Козерог","Водолей","Рыбы","Овен","Телец","Близнецы","Рак","Лев","Дева","Весы","Скорпион","Стрелец"];

//событие
btn10.onclick = () => {
    console.log("work");
    console.log(userData1.value);
    console.log(userData2.value);
    //console.log(zodiak[3]);
    out10.innerHTML = "Ваш знак: ";
    let inData1 = userData1.value;
    let inData2 = userData2.value;
    if (inData1 <= 31 && inData2 <= 12) {
        if ((inData1 >= 21 && inData2 === '3') || (inData1 <= 20 && inData2 === '4')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[3];
        }
        if ((inData1 >= 21 && inData2 === '4') || (inData1 <= 21 && inData2 === '5')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[4];
        }
        if ((inData1 >= 22 && inData2 === '5') || (inData1 <= 21 && inData2 === '6')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[5];
        }
        if ((inData1 >= 22 && inData2 === '6') || (inData1 <= 22 && inData2 === '7')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[6];
        }
        if ((inData1 >= 23 && inData2 === '7') || (inData1 <= 23 && inData2 === '8')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[7];
        }
        if ((inData1 >= 24 && inData2 === '8') || (inData1 <= 23 && inData2 === '9')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[8];
        }
        if ((inData1 >= 24 && inData2 === '9') || (inData1 <= 23 && inData2 === '10')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[9];
        }
        if ((inData1 >= 24 && inData2 === '10') || (inData1 <= 22 && inData2 === '11')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[10];
        }
        if ((inData1 >= 23 && inData2 === '11') || (inData1 <= 21 && inData2 === '12')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[11];
        }
        if ((inData1 >= 22 && inData2 === '12') || (inData1 <= 20 && inData2 === '1')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[0];
        }
        if ((inData1 >= 21 && inData2 === '1') || (inData1 <= 18 && inData2 === '2')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[1];
        }
        if ((inData1 >= 19 && inData2 === '2') || (inData1 <= 20 && inData2 === '3')) {
            document.querySelector("#out10").innerHTML += " " + zodiak[2];
        }


        userData1.value = "";
        userData2.value = "";
    }
};

/*======== Task 11 ==========*/
//переменные
let btn11 = document.querySelector("#btn11");
let spans = document.querySelectorAll("span");

console.log(spans);

//событие
btn11.onclick = ()=>{

    for (let i = 0; i < spans.length; i++) {
        console.log(spans[i]);
        spans[i].style.backgroundColor = 'yellow';

    }
};

/*======== Task12 =========*/
    let pAll = document.querySelectorAll("p");
    let span12 = document.querySelector("#span12");
    span12.innerHTML = pAll.length;


/*======== Task13 =========*/

let arr = [1, 0, 0, 0, 0, 0];
let p13 = document.querySelector("#p13");
let btn13 = document.querySelector("#btn13");
p13.innerHTML = arr;

//событие
btn13.onclick = ()=> {
    console.log("work");
    for (let i = 0; i < 5; i++) {
        if (arr[i] === 1) {
            let tmp = 1;
            arr[i] = 0;
            arr[i + 1] = tmp;
            p13.innerHTML = arr;
            break;
        } else {
            continue;
        }
    }
};

/*======== Task14 =========*/
let arr14 = [1, 0, 2, 5, -5, 8, 10, -10, -20];
let p14 = document.querySelector("#p14");
let outp14 = document.querySelector("#outP14");
let count14 = 0;
p14.innerHTML = arr14;

function negativeNum() {
    for (let i = 0; i < arr14.length; i++) {
        if (arr14[i] < 0){
            count14++;
        }
    }
    outp14.innerHTML = " Количество отрицательных чисел: " + count14;
}

negativeNum();

/*======== Task15 =========*/
//переменные
let arr15 = [1, 0, 2, 5, -5, 8, 10, -10, -20];
let p15 = document.querySelector("#p15");
let outp15 = document.querySelector("#outP15");
p15.innerHTML = arr15;

//функция
function negativeNum15() {
    for (let i = 0; i < arr15.length; i++) {
        if (arr14[i] < 0){
            outp15.innerHTML += " " + arr15[i];
        }
    }
}

negativeNum15();

/*======== Task16 =========*/
//переменные
let userInput16 = document.querySelector("#user-input16"),
    btn16 = document.querySelector("#btn16"),
    outp16 = document.querySelector("#outp16"),
    arr16 = [];

//событие
btn16.onclick = () =>{
    outp16.innerHTML= 'Вывод массива данной длины: ';
    let userNum = userInput16.value;
    for (let i = 0; i < userNum; i++) {
        arr16[i] = 1;
    }
    outp16.innerHTML+= arr16;
    userInput16.value = "";
};

/*======== Task17 =========*/
//переменные
let userInput17 = document.querySelector("#user-input17"),
    btn17 = document.querySelector("#btn17"),
    outp17 = document.querySelector("#outp17"),
    arr17 = [];

//событие
btn17.onclick = () => {
    outp17.innerHTML= 'Вывод массива данной длины: ';
    let userNum = userInput17.value;
    for (let i = 0; i < userNum; i++) {
        let rnd = Math.floor(Math.random()*100);
        arr17[i] = rnd;
    }

    outp17.innerHTML+= arr17;
    userInput17.value = "";
};

/*======== Task18 =========*/
//переменные
let outP18 = document.querySelector("#outp18");
let arr18 = [1, 10, 'бро','cat', 13, 8, 'dog', 'sky', 5, 45, 21, 'red'];
let arr18Word = [];
let p18 = document.querySelector("#p18");
p18.innerHTML += arr18;

//функция
function sortArr(arr) {
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (isNaN(arr[i])){
            arr18Word[j] = arr[i];
            j++;
        }
    }
    outP18.innerHTML += " " + arr18Word;
}

sortArr(arr18);

/*======== Task19 =========*/
//переменные
let outP19 = document.querySelector("#outp19");
let arr19 = [1, 10, 2, 100, 13, 8, 101, 222, 5, 45, 1001, 202];
let p19 = document.querySelector("#p19");
p19.innerHTML += arr19;


//функция
function maxNum(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i]) > maxNum){
            maxNum = arr[i];
        }
    }
    outP19.innerHTML += maxNum;
}

maxNum(arr19);

/*======== Task20 =========*/
//переменные
let outP20 = document.querySelector("#outp20");
let arr20 = [22, 3, 1, 22, 3, 5, 67, 32, 1, 3];
let arr20New = {};
let p20 = document.querySelector("#p20");
p20.innerHTML += arr20;

//функция
function countNum() {
    for (let i = 0; i < arr20.length; i++) {
        if(arr20New[arr20[i]] === undefined){
            arr20New[arr20[i]] = 1;
        }else {
            arr20New[arr20[i]]++;
        }
        //console.log( arr20New[arr20[i]] in arr20New);
    }
    for (let key in arr20New){
        outP20.innerHTML+= " " + key + '---' + arr20New[key] +';';
    }
}

countNum();