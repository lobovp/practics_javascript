'use strict';
/*========Task 1==========*/
//переменные
let blk1 = document.querySelector(".main-block1");

//событие
blk1.ondblclick = ()=>{
    console.log("Блок1");
};

/*========Task 2==========*/
//переменные
document.querySelector("body").oncontextmenu = ()=>{
    return false;
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

