'use strict';
//отключение выделения
document.querySelector("body").onselectstart = ()=>{
    return false;
};

/*========Task 1==========*/
//переменные
let blk1 = document.querySelector(".main-block1");

//событие
blk1.ondblclick = ()=>{
    console.log("Блок1. Двойной клик мышки");
};

/*========Task 2==========*/
//отключение клика правой кнопки мыши
document.querySelector("body").oncontextmenu = ()=>{
    return false;
    console.log("J")
};


/*========Task 3==========*/
//переменные
let blk3 = document.querySelector(".main-block3");

//событие
blk3.onmouseenter =()=>{
   blk3.style.backgroundImage = "url(img/folder_open.png)";
};
blk3.onmouseleave =()=>{
    blk3.style.backgroundImage = "url(img/folder_close1.svg)";
};
/*======= Task 4 =========*/
let divs = document.querySelectorAll(".block4");

//функции

function random_Bg_Color() {
    function randomColor() {
        return Math.floor(Math.random()*255);
    }
    this.style.backgroundColor =  'RGB(' + randomColor() + ", " + randomColor() + ", "
        + randomColor() + ')';
}

for (let i = 0; i < divs.length; i++) {
    divs[i].onmouseenter = random_Bg_Color;
}

