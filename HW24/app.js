// window.addEventListener("load", function onWindowLoad() {

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const list = document.querySelector('.erase');
list.addEventListener('click', onList);

document.getElementById("rubber").onclick = () => (isClearOn = !isClearOn);
let isClearOn = false;

function onList(click){
  if (click.target.classList.contains('white')) {
    click.target.classList.toggle('liColor');
  }
};

function lineRubberRange() {
  let widthLine = document.getElementById("rubberRange").value;
  return widthLine;
};

function changeColor() {
  let typeColor = document.getElementById("useColor").value;
  return typeColor;
};

function lineWidthRange() {
  let widthLine = document.getElementById("myRange").value;
  return widthLine;
};

document.getElementById("clear").onclick = function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.onmousemove = function drawIfPressed(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  var dx = e.movementX;
  var dy = e.movementY;

  if (e.buttons > 0) {
    if (!isClearOn) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dx, y - dy);
      ctx.lineWidth = lineWidthRange();
      ctx.strokeStyle = changeColor();
      ctx.stroke();
      ctx.closePath();
    } else {
      ctx.clearRect(x,y,5,5);
    }
  }
};
