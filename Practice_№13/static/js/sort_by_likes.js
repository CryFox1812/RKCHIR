const cards = document.querySelectorAll('.cards .card_container');
const button = document.querySelector('.sort');
const warning = document.querySelector('.warning');

function hide_uninteresting()
{
  let cnt = cards.length;
  for(let i = 0; i < cards.length; i++)
  {
    if(localStorage.getItem('like_' + i) == '0')
    {
      cards[i].classList.add('hide');
      cnt -= 1;
    }
  }
  if (cnt == 0) 
  {
    warning.style.display = 'flex';
  }
}

function show_all()
{
  for(let i = 0; i < cards.length; i++)
  {
    cards[i].classList.remove('hide');
  }
  warning.style.display = 'none';
}

function sort_init()
{
  if (localStorage.getItem('sort') == '1') {
    button.classList.add('sort_hover');
    hide_uninteresting();
  }
  else if (localStorage.getItem('sort') == null) {
    localStorage.setItem('sort', '0');
  }
}

sort_init()
button.onclick = function()
{
  if (localStorage.getItem('sort') == '0')
  {
    button.classList.add('sort_hover');
    localStorage.setItem('sort', '1');
    hide_uninteresting();
  }
  else
  {
    button.classList.remove('sort_hover');
    localStorage.setItem('sort', '0');
    show_all();
  }
}
