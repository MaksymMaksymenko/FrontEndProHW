const btn = document.querySelector('#btn');
btn.addEventListener('click', onClick);
const firstNumEl = document.querySelector('#firstNum');
const secondNumEl = document.querySelector('#secondNum');
const container = document.querySelector('.container');
container.addEventListener('click', onTodo);

const list = document.querySelector('.list');
list.addEventListener('click', onList);

const color = document.querySelector('.table');
color.addEventListener('click', onBody);

function onClick(e) {
  const first = parseInt(firstNumEl.value);
  const second = parseInt(secondNumEl.value);
  const userContainer = document.createElement('div');
  const summ = first+second;
  document.getElementsByTagName('div').innerHTML = summ;
  userContainer.classList.add('todo');
  console.log(userContainer.classList);
  const innerHTML = `${summ} <span class="close">X</span>`;
  userContainer.innerHTML = innerHTML;
  container.append(userContainer);
  firstNumEl.value = '';
  secondNumEl.value = '';
}

function onTodo(event) {
  // if (event.target.classList.contains('todo')) {
  //   event.target.classList.toggle('done');
  // }
  if (event.target.classList.contains('close')) {
    event.target.closest('.todo').remove();
  }
  console.log(event.target);
}

  function onList(click){
  if (click.target.classList.contains('textList')) {
    click.target.classList.toggle('liColor');
  }
}

function onBody(color){
  if (color.target.classList.contains('oneSquare')) {
    color.target.classList.toggle('fourSquare');
  }
}

