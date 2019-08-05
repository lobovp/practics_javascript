//создаем переменные
let input = document.querySelector(".text-input");

document.querySelector("#btn").onclick = function () {

    //Получаем данные из input type = text
    console.log(input.value);

    //Получаем данные из input type = password
    console.log((document.querySelector(".pass-input").value));

    //Получаем данные из input type = range
    console.log((document.querySelector(".range-input").value));

//Получаем данные из input type = date
    console.log((document.querySelector(".calendar-input").value));

//Получаем данные из input type = color
    console.log((document.querySelector(".color-input").value));

//Получаем данные из input type = checkbox
    console.log((document.querySelector(".checkbox-input").checked));

};
/*===== Задание1 =========*/
//переменные
let btn1 = document.querySelector('#btn1');

//событие
btn1.onclick = changeColor;

//функция
function changeColor() {
    console.log((document.querySelector(".color-input1").value));
    let color1 = document.querySelector(".color-input1").value;
    document.querySelector("body").style.backgroundColor = color1;
}

/*===== Задание2 =========*/
//переменные
let btn2 = document.querySelector('#btn2');
let btn21 = document.querySelector('#btn2-1');
let colorInput2 = document.querySelector(".color-background");
let colorInput21 = document.querySelector(".color-font");
let sBody = document.querySelector("body");

//событие
btn2.onclick = changeColor2;
btn21.onclick = function () {
    location.reload();
};

//функция
function changeColor2() {
    console.log(colorInput2.value);
    console.log((colorInput21.value));

    sBody.style.backgroundColor = colorInput2.value;
    sBody.style.color = colorInput21.value;
}
/*===== Задание 3 - 4 =========*/
//переменная
let rng = document.querySelector(".range-input3");//input range
let bodyStyle = document.querySelector("body");//обращение к тегу body
let outNum = document.querySelector("#out-num");//обращение к input

//событие
    rng.oninput = function () {
    console.log(rng.value);
    bodyStyle.style.fontSize = rng.value + 'px';
    outNum.value = rng.value;//вывод значения в input
};
/*===== Задание 5 =========*/
//переменные
let rngR5 = document.querySelector(".range-r5");
let rngG5 = document.querySelector(".range-g5");
let rngB5 = document.querySelector(".range-b5");
let blk5 = document.querySelector("#block5");
let r5 = document.querySelector("#out-r5");
let g5 = document.querySelector("#out-g5");
let b5 = document.querySelector("#out-b5");

//события
rngR5.oninput = changeColorBlk;
rngG5.oninput = changeColorBlk;
rngB5.oninput = changeColorBlk;

//функция
function changeColorBlk(){
    //console.log(rngR5.value);
    r5.value = rngR5.value;
    g5.value = rngG5.value;
    b5.value = rngB5.value;
    blk5.style.backgroundColor = 'RGB(' + r5.value +',' + g5.value +',' +b5.value +')';
}
//сделал без стрелочных функций, поздно прочитал Ваш комментарий
//если успею ,перезалью к четвергу