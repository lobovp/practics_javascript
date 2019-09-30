/*====== 10 задание =======*/
// переменные
const showModal = document.querySelector('#show-modal');
const modal10 = document.querySelector('.modal10');

//события
showModal.onclick = () => {
    if (modal10.classList.contains('hide')){
    modal10.classList.toggle('hide');
    showModal.innerHTML = 'Hide';
  }else {
    modal10.classList.toggle('hide');
    showModal.innerHTML = 'Show';
  }
  document.onkeydown  = (ev) =>{
    if (ev.key === 'Escape') {
      if (modal10.classList.contains('hide')) {
        modal10.classList.toggle('hide');
        showModal.innerHTML = 'Hide';
      } else{
        modal10.classList.toggle('hide');
        showModal.innerHTML = 'Show';
      }
    }
  }
};