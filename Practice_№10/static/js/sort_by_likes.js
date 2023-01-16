const cards = document.querySelectorAll('.cards li');
const button = document.querySelector('.sort');

function hide_uninteresting()
{
  for(let i = 0; i < cards.length; i++)
  {
    if(localStorage.getItem('like_' + i) == '0')
    {
      cards[i].classList.add('hide');
    }
  }
}

function show_all()
{
  for(let i = 0; i < cards.length; i++)
  {
    cards[i].classList.remove('hide');
  }
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
