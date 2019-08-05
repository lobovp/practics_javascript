//создаем переменные
let input = document.querySelector(".text-input");

document.querySelector("#btn").onclick = function () {

    let radio = document.querySelectorAll('.radio-input');
    //console.log(radio);
    //radio[2].hidden = true;

    for (let i = 0; i < radio.length; i++){
        //console.log(radio[i].checked);
        if(radio[i].checked){
            console.log(radio[i].value);
        }
    }
    let p =document.querySelectorAll('p');
    console.log(p);
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'red';
    }
    let option = document.querySelectorAll("#my-select option");
    console.log(option);
    for (let i = 0; i < option.length; i++) {
        //console.log(option[i].selected);
        if(option[i].selected){
            console.log(option[i].value);
        }
    }
};





