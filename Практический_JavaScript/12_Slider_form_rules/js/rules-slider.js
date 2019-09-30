document.querySelector(".read-rules").onclick = function () {
    //console.log('work');
    document.querySelector(".form-slider").style.marginLeft = '-250px';
};

document.querySelectorAll(".read-rules-back").forEach( function (element){
    element.onclick = backToForm;
});
    //console.log('work');
function backToForm (){
    document.querySelector(".form-slider").style.marginLeft = '0px';
}

