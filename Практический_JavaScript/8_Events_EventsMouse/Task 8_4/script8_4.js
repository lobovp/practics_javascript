/*========Task 4==========*/
//переменные

let divs = document.querySelectorAll("div");

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
    //randomColor(div);
}
