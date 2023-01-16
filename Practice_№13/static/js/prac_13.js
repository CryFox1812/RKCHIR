//// task 1 ////

let container_1 = document.querySelector("#contents");

container_1.onclick = function(event)
{
  event.preventDefault();
  var i;
  for(i = 0; i < event.composedPath().length; i++)
  {
    if(event.composedPath()[i].hostname == location.hostname) return;
    if(event.composedPath()[i].tagName == "A") conf(event.composedPath()[i]);
  }
}

function conf(target)
{
  const result = confirm("Хотите покинуть страницу???");
  if (result) {
    window.location.href = target;
  }
}

//// task 2 ////

let picture;
let box;

for(var i = 0; i < 5; i++)
{
  box = document.querySelector(".container .img_" + i);
  picture = document.createElement("img");
  picture.src = "static/img/img_" + i + ".jpg";
  box.appendChild(picture); 
}

box = document.querySelector(".container .main");
picture = document.createElement("img");
picture.src = "static/img/img_" + 0 + ".jpg";
box.appendChild(picture); 

picture = document.querySelector(".container .main img");
let container_2 = document.querySelector(".container");

container_2.onclick = function(event)
{
  let target = event.target;

  if(target.tagName != "IMG") return;

  show(target);
}

function show(target)
{
  picture.src = target.src;
}

//// task 3 ////

let container_3 = document.querySelector(".list");
list = document.querySelectorAll(".item");
console.log(container_3);
console.log(list);

container_3.onclick = function(event)
{
  let target = event.target;

  if(target.className != "item" && target.className != "item selected") return;
  
  if (event.ctrlKey) 
  {
    addSelect(target);
  }
  else
  {
    select(target);
  }
}

function select(target)
{
  let flag = true;
  if(target.classList.contains('selected'))
  {
    flag = false;
  }
  for(const item of list)
  {
    if(item.classList.contains('selected'))
    {
      item.classList.remove('selected');
    }
  }
  if(flag)
  {
    target.classList.add('selected');
  }
}

function addSelect(target)
{
  if(target.classList.contains('selected'))
  {
    target.classList.remove('selected');
  }
  else
  {
    target.classList.add('selected');
  }
}

//// task 5 ////

var sum = 0;
var cnt = 0;
var active_cost = 0;
var focus = false;

const area = document.querySelector('.shop');
const card_list = area.querySelectorAll('.card');
const cost = document.querySelector('.cart .cost');
const count = document.querySelector('.cart .count');
console.log(cost);
console.log(count);

for (const task of card_list) {
  task.draggable = true;
}

area.addEventListener('dragstart', (event) => {
  if(event.target.tagName != 'LI') return;

  event.target.classList.add('selected');
})

area.addEventListener('dragend', (event) => {
  if(event.target.tagName != 'LI') return;

  if (focus)
  {
    cnt += 1;
    sum += active_cost;
    console.log(cost.textContent);
    console.log(count.textContent);
    cost.textContent = sum + '$';
    count.textContent = '(' + cnt + ')';
  }
  event.target.classList.remove('selected');
});


area.addEventListener('dragover', (event) => {

  active_cost = 0;
  focus = false;

  event.preventDefault();

  const activeElement = area.querySelector('.selected');

  const currentElement = event.target;

  if (!(currentElement.classList.contains('cart') || 
        currentElement.classList.contains('cost') || 
        currentElement.classList.contains('count'))) {
    return;
  }
  focus = true;
  
  if(activeElement == null || activeElement.tagName != 'LI') return;
  active_cost = Number(activeElement.textContent.substr(0, activeElement.textContent.length-1));
});

//// task 6 ////

var card = document.querySelector(".cart");
var playing = false;

card.addEventListener('click', function() {
  if(playing) return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 0.9},
            {value: 1, delay: 50}, 
            {value: 1.1}, 
            {value: 0.9, delay: 200}, 
            {value: 1, delay: 100}],
    rotateY: {value: '+=180', delay: 350},
    easing: 'easeInOutSine',
    duration: 500,
    complete: function(){
       playing = false;
    }
  });
});

////  ////

var point = document.querySelector(".point");
var direction = 0;

point.addEventListener('click', function() {
  if (direction == 0) 
  {
    anime({
      targets: point,
      scale: [{value: 1.4},
              {value: 0.6},
              {value: 1.3},
              {value: 0.7},
              {value: 1.2},
              {value: 0.8},
              {value: 1.1},
              {value: 0.9},
              {value: 1.05},
              {value: 0.95},
              {value: 1},
              {value: 1}],
      translateY: [{value: -100},
                  {value: 0}, 
                  {value: -50}, 
                  {value: 0},
                  {value: -25}, 
                  {value: 0},  
                  {value: -12}, 
                  {value: 0}, 
                  {value: -6}, 
                  {value: 0}, 
                  {value: -3}, 
                  {value: 0}],
      backgroundColor: [{value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"},],
      easing: 'easeInOutQuad',
      duration: 3000,
    });
  }
  else if (direction == 2)
  {
    anime({
      targets: point,
      scale: [{value: 1.4},
              {value: 0.6},
              {value: 1.3},
              {value: 0.7},
              {value: 1.2},
              {value: 0.8},
              {value: 1.1},
              {value: 0.9},
              {value: 1.05},
              {value: 0.95},
              {value: 1},
              {value: 1}],
      translateX: [{value: -100},
                  {value: 0}, 
                  {value: -50}, 
                  {value: 0},
                  {value: -25}, 
                  {value: 0},  
                  {value: -12}, 
                  {value: 0}, 
                  {value: -6}, 
                  {value: 0}, 
                  {value: -3}, 
                  {value: 0}],
      backgroundColor: [{value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"},],
      easing: 'easeInOutQuad',
      duration: 3000,
    });
  }
  else
  {
    anime({
      targets: point,
      scale: [{value: 1.4},
              {value: 0.6},
              {value: 1.3},
              {value: 0.7},
              {value: 1.2},
              {value: 0.8},
              {value: 1.1},
              {value: 0.9},
              {value: 1.05},
              {value: 0.95},
              {value: 1},
              {value: 1}],
      translateY: [{value: -100},
                  {value: 0}, 
                  {value: -50}, 
                  {value: 0},
                  {value: -25}, 
                  {value: 0},  
                  {value: -12}, 
                  {value: 0}, 
                  {value: -6}, 
                  {value: 0}, 
                  {value: -3}, 
                  {value: 0}],   
      translateX: [{value: -100},
                  {value: 0}, 
                  {value: -50}, 
                  {value: 0},
                  {value: -25}, 
                  {value: 0},  
                  {value: -12}, 
                  {value: 0}, 
                  {value: -6}, 
                  {value: 0}, 
                  {value: -3}, 
                  {value: 0}],
      backgroundColor: [{value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}, 
                        {value: "#f8c932"},
                        {value: "#d6ff00"}],
      easing: 'easeInOutQuad',
      duration: 3000,
    });
  }
  direction = (direction + 1) % 4;
});