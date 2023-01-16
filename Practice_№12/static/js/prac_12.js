////

var notifs = 0;
var timeId = setInterval(() => 
{
  notifs++;
  document.querySelector(".notifs").innerHTML = notifs;
}, 1000);

const button = document.querySelector('.button');
button.onclick = function()
{
  clearInterval(timeId);
  setTimeout(() => 
  {
    timeId = setInterval(() => 
    {
      notifs++;
      document.querySelector(".notifs").innerHTML = notifs;
    }, 1000);
  }, 5000);
}

//// task 1 ////

const hrefs = document.querySelectorAll('a[href^="#"]');

for(let href of hrefs) {
  href.addEventListener("click", function(e) {
    e.preventDefault();
    const block = href.getAttribute('href');
    document.querySelector(block).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++)
    {
        console.log(links[i].hostname + " : " + document.domain);
        if(links[i].hostname != document.domain)
        {
            links[i].style.color = hex;  
        }
    }  
}

colorLinks("#00FF00");

//// task 2 ////

let list = [];

function add(text)
{
  item = document.createElement('li');
  item.className = "item";
  item.textContent = text;
  list.push(item);
  document.querySelector(".list").appendChild(list[list.length - 1]);
}

/*while(true)
{
  text = window.prompt('Add new element?');
  
  if (text == null || text == "") break;
  
  add(text);
}*/

//// task 3 ////

function showNotification(text)
{
  item = document.createElement('div');
  item.className = "notification";
  item.textContent = text;
  document.body.insertAdjacentElement('afterbegin', item);

  setTimeout(() => 
  {
    item.remove();
  }, 3000);
  
}

button.onclick = function()
{
  showNotification(notifs);
}

//// task 4 ////

let box = document.querySelector(".box");
let img = document.querySelector(".box img");

box.style.left = String((window.innerWidth - box.offsetWidth) / 2) + "px";
box.style.top = String((window.innerHeight - box.offsetHeight) / 2) + "px";

img.style.left = String((box.offsetWidth - img.offsetWidth) / 2) + "px";
img.style.top = String((box.offsetHeight - img.offsetHeight) / 2) + "px";

addEventListener('click', (event) => {
  console.log(event.pageX + " - " + event.pageY);
});

//// task 5 ////

let container = document.querySelector(".container");

container.onclick = function(event)
{
  let target = event.target;

  if(target.className != "cross") return;

  close(event.composedPath());
}

function close(target)
{
  target[1].classList.add('close');
}