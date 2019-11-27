let select = document.querySelector('#select-1');
console.log(select);
select.onchange = function () {
    //console.log(select.value);
};
let btn = document.querySelector('#send-form');
console.log(btn);
btn.onclick = function (event) {
    event.preventDefault();//отключение перезагрузки страницы
    console.log('work');
};