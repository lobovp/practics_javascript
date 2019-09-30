'use strict';
document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
   element.onclick = closeModal();
});

function showModal() {
    const modalId = this.dataset.modal;
    console.log('modalId');
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
}

function closeModal() {
    const modalId = this.dataset.modal;
    console.log('modalId');
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
}
