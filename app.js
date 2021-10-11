// HW8
const buttonEl = document.querySelector('#send');
// const input = document.querySelector("input[type='text']");
const textMessageEl = document.querySelector('[name="textMessage"]');
const commentEl = document.querySelector('#container');



buttonEl.addEventListener("click", onClick);

function onClick() {
  console.log("clicked")
  const el = document.createElement("li");
  el.textContent = textMessageEl.value;
  commentEl.append(el);
  textMessageEl.value = '';

}