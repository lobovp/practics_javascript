/*=========== TASK1 ==============*/
let usInput1 = document.querySelector("#us-input1");

//событие

usInput1.onkeypress = function (e) {
    console.log(e);
    if(e.keyCode >= 48 && e.keyCode <= 57 || e.shiftKey){
        return false;
    }
};

/*=========== TASK2 ==============*/
let blk2Inner = document.querySelector(".main-blk2__inner");
let div = document.querySelector("div");
let left = 0;
let deg = 0;

//событие
document.onkeypress = function (e) {
   console.log(e);
   if (e.keyCode === 100 && left <= 260){
       left+=10;
       blk2Inner.style.marginLeft = left + 'px';
   }if (e.keyCode === 97 && left >= 10){
        left-=10;
        blk2Inner.style.marginLeft = left + 'px';
    }if (e.keyCode === 32){
       deg +=22.5;
        blk2Inner.style.transform = 'rotate(' + deg + 'deg)';
    }
};

/*=========== TASK3 ==============*/
let pp = document.querySelector("#main-blk3__p");


document.onkeypress = function (e) {
    console.log(e);
    pp.innerHTML += rndKey();
};

//функция
function rndKey() {
    let rnd = Math.floor(Math.random()*(122- 97)+97);
    console.log(rnd);
    return  String.fromCharCode(rnd);
}

/*=========== TASK4 ==============*/
const alfa = {
    q:"w",
    w:"e",
    e:"r",
    r:"t",
    t:"y",
    y:"u",
    u:"i",
    i:"o",
    o:"p",
    p:"q",
    a:'s',
    s:"d",
    d:"f",
    f:"g",
    g:"h",
    h:"j",
    j:"k",
    k:"l",
    l:"a",
    z:"x",
    x:"c",
    c:"v",
    v:"b",
    b:"n",
    n:"m",
    m:"z"
};