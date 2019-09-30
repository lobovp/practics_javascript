'use strict';
document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});
document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = closeModal;
});
document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.onclick = closeModal;
});


function showModal() {
    let modalId = this.dataset.modal;
    //console.log(modalId);
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');

    document.onkeydown = function (event) {
        console.log(event);
        if (event.keyCode === 27) {
            closeModal();
        }
    };
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
        document.onkeydown = null;
    });
}