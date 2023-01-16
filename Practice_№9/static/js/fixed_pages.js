const home_block = document.querySelector(".home_block");
const history_block = document.querySelector(".history_block");
const innovations_block = document.querySelector(".innovations_block");

let home_block_pos;
let history_block_pos;
let innovations_block_pos;

let past_pos = scrollY;
let current_pos;
window.onscroll = function() 
{
  home_block_pos = home_block.getBoundingClientRect().top;
  history_block_pos = history_block.getBoundingClientRect().top;
  innovations_block_pos = innovations_block.getBoundingClientRect().top;
  current_pos = scrollY;

  if (past_pos < current_pos)
  {
    if (history_block_pos > 0 && history_block_pos < 400)
    {
      window.scrollBy({ 
        top: history_block_pos,
        behavior: 'smooth'
      })
    }
    else if (innovations_block_pos > 0 && innovations_block_pos < 400)
    {
    }
  }
  else
  {
    if (home_block_pos > -400 && home_block_pos < 0)
    {
    }
    else if (history_block_pos > -400 && history_block_pos < 0)
    {
    }
  }
  past_pos = current_pos;
};