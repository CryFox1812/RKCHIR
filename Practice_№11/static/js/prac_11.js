let n = 10;
let cards = [];
let card;

function add(i)
{
  card = document.createElement('div');
  card.className = "card";
  card.innerHTML = i;
  cards.push(card);
  document.querySelector(".cards").appendChild(cards[cards.length - 1]);
}

function add_all()
{
  for (var i = 0; i < cards.length; i++) 
  {
    document.querySelector(".cards").appendChild(cards[i]);
  }
}

function remove(i)
{
  if(cards[i])
  {
    document.querySelector('.cards').removeChild(cards[i]);
    cards.splice(i, 1);
  }
}

function remove_all()
{
  for (var i = 0; i < cards.length; i++) 
  {
    document.querySelector('.cards').removeChild(cards[i]);
  }
}

function update(new_cards)
{
  remove_all();
  cards = new_cards;
  add_all();
}

function start_creation(n)
{
  for (var i = 0; i < n; i++) 
  {
    card = document.createElement('div');
    card.className = "card";
    card.innerHTML = i;
    cards.push(card);
  }
  add_all();
}

function filter(a, b)
{
  let new_cards = cards.filter(card => card.innerText <= a || card.innerText >= b);
  return new_cards;
}

function compare_up(a, b) {
  return b.innerText - a.innerText;
}

function compare_down(a, b) {
  return a.innerText - b.innerText;
}

function sorting(flag)
{
  if (flag)
  {
    cards.sort(compare_up);
  }
  else
  {
    cards.sort(compare_down);
  }
  update(cards);
}

start_creation(n);

let is_on_1 = false;
const button_1 = document.querySelector('.button_1');
button_1.onclick = function()
{
  if (is_on_1)
  {
    for (var i = 0; i < n; i++) 
    {
      add(i);
    }
  }
  else
  {
    for (var i = 0; i < n; i++) 
    {
      remove(0);
    }
  }
  is_on_1 = !is_on_1;
}

const button_2 = document.querySelector('.button_2');
button_2.onclick = function()
{
  remove(0);
  n -= 1;
}

const button_3 = document.querySelector('.button_3');
button_3.onclick = function()
{
  add(n);
  n += 1;
}

const button_4 = document.querySelector('.button_4');
button_4.onclick = function()
{
  remove(cards.length - 1);
  add(n);
  n += 1;
}

var cards_rem;
let is_on_5 = true;
const button_5 = document.querySelector('.button_5');
button_5.onclick = function()
{ 
  if (is_on_5)
  {
    cards_rem = cards;
    update(filter(3, 6));
  }
  else
  {
    update(cards_rem);
  }
  is_on_5 = !is_on_5;
}

let is_on_6 = true;
const button_6 = document.querySelector('.button_6');
button_6.onclick = function()
{ 
  sorting(is_on_6);
  is_on_6 = !is_on_6;
}

////
var notifs = 0;
var timeId = setInterval(() => 
{
  notifs++;
  document.querySelector(".notifs").innerHTML = notifs;
}, 1000);

const button_7 = document.querySelector('.button_7');
button_7.onclick = function()
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