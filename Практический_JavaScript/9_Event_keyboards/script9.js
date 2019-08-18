'use strict';

/*= ========== TASK1 ============== */
const usInput1 = document.querySelector('#us-input1');

// событие

usInput1.onkeypress = function (e) {
  console.log(e);
  if (e.keyCode >= 48 && e.keyCode <= 57 || e.shiftKey || e.keyCode >= 1072 && e.keyCode <= 1103) {
    return false;
  }
};

/*= ========== TASK2 ============== */
const blk2Inner = document.querySelector('.main-blk2__inner');
const div = document.querySelector('div');
let left = 0;
let moveUp = 0;
let deg = 0;

// событие
document.querySelector('#us-input2').onkeypress = function (e) {
  console.log(e);
  if (e.keyCode === 100 && left <= 260) {
    left += 10;
    blk2Inner.style.marginLeft = `${left}px`;
  } else if (e.keyCode === 97 && left >= 10) {
    left -= 10;
    blk2Inner.style.marginLeft = `${left}px`;
  } else if (e.keyCode === 119 && moveUp>=5){
    moveUp-= 5;
    blk2Inner.style.marginTop = `${moveUp}px`;
  } else if (e.keyCode === 115 && moveUp <= 130){
    moveUp+= 5;
    blk2Inner.style.marginTop = `${moveUp}px`;
  } else if (e.keyCode === 32) {
    deg += 22.5;
    blk2Inner.style.transform = `rotate(${deg}deg)`;
  }else if(e.keyCode != 100 && e.keyCode != 97 && e.keyCode != 119 && e.keyCode != 115 && e.keyCode != 32){
    return false;
  }
};

/*=========== TASK3 ============== */
const pp = document.querySelector('#main-blk3__p');


document.querySelector("#us-input3").onkeypress = function (e) {
  console.log(e);
  pp.innerHTML += rndKey();
};

// функция
function rndKey() {
  const rnd = Math.floor(Math.random() * (122 - 97) + 97);
  console.log(rnd);
  return String.fromCharCode(rnd);
}

/*= ========== TASK4 ============== */
//переменныые
const alfa = {
  'q': 'w',
  'w': 'e',
  'e': 'r',
  'r': 't',
  't': 'y',
  'y': 'u',
  'u': 'i',
  'i': 'o',
  'o': 'p',
  'p': '[',
  '[': ']',
  ']': 'q',
  'a': 's',
  's': 'd',
  'd': 'f',
  'f': 'g',
  'g': 'h',
  'h': 'j',
  'j': 'k',
  'k': 'l',
  'l': ';',
  ';': "'",
  "'": 'a',
  'z': 'x',
  'x': 'c',
  'c': 'v',
  'v': 'b',
  'b': 'n',
  'n': 'm',
  'm': ',',
  ',': '.',
  '.': '/',
  '/': 'z',
};
let usInput4 = document.querySelector("#us-input4");

//событие

usInput4.onkeypress = function (e) {
  // console.log(e);
  // console.log(alfa[e.key]);
  this.value+=alfa[e.key];
  return false;
};

