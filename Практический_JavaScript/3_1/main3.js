/*====== 1задание =======*/
//переменные
let showModal = document.querySelector("#show-modal");
let hiddenModal = document.querySelector("#hidden-modal");
let modal = document.querySelector(".modal");

hide();//скрывем окно , если отключено св-во в CSS

//показать окно
function show(){
    modal.hidden = false;//
    //modal.style.display = "block";//показ через css
}

//скрыть окно
function hide() {
    modal.hidden = true;
    //modal.style.display = "none";//скрытие через CSS
}

//события
showModal.onclick = show;
hiddenModal.onclick = hide;

/*======== 1 задание end========*/

/*======== 2 задание ========*/
/*2. Напишите функцию, которая складывает два числа. Числа прописаны внутри функции. Функция выполняется при нажатии на кнопку.*/

let calc = document.querySelector('#calculation');
calc.onclick = sum;

//функция
function sum() {
    console.log(3 + 7);
}
/*======== 2 задание end ========*/

/*======== 3 задание ========*/
/*3. Создайте кнопку, добавьте функцию при нажатии на кнопку. Функция должна выводить alert с приветствием.*/

//Сщздаем переменную
let hi = document.querySelector("#hi");

//событие
hi.onclick = hello;

//функция
function hello() {
    alert("I am GRUT")
}

/*======== 4 задание ========*/
/*4. Создайте кнопку которая при нажатии запускает две произвольные функции.*/

let act = document.querySelector('#act');

//событие
act.onclick = action;

//функции
function action() {
    act1();
    act2();
}

function act1() {
    console.log("act1");
}
function act2() {
    console.log("act2");
}


/*======== 5 задание ========*/
/*5. Создайте кнопку, нажатие на которую скрывает сама себя.*/
let hideBtn = document.querySelector("#hide");

hideBtn.onclick = hidden1;

function hidden1() {
    hideBtn.style.display = "none";
}

/*======== 6 задание ========*/
/*6. Создайте кнопку, которая при нажатии выводит вместо текста на себе - предупреждение "не нажимать".*/

let push = document.querySelector("#push");

push.onclick = noTouch;

function noTouch() { 
    push.innerHTML = "не нажимать";
}

