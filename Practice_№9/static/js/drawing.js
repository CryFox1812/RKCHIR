
const canvas = document.querySelector("canvas");
const cx = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);
        
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

let img = document.createElement("img");
img.src = "static/img/cards/heart.png";

let active = false;
const drawButton = document.querySelector(".draw");
drawButton.onclick = function()
{
  active = !active;
  if (active)
  {
    addEventListener('mousemove', draw);
  }
  else
  {
    removeEventListener('mousemove', draw);
  }
}

function draw(e) {
  cx.drawImage(img, e.pageX, e.pageY, 25, 25);
}

