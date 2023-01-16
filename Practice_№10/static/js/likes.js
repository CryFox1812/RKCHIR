const likeButtons = document.querySelectorAll(".like");
const defaultButtons = document.querySelectorAll(".default");
const hoverButtons = document.querySelectorAll(".hover");
const likeNums = document.querySelectorAll(".likes_num");

function like(index)
{
  defaultButtons[index].style.opacity = 0;
  hoverButtons[index].style.opacity = 1;
  likeButtons[index].style.backgroundColor = '#ffdada';
  likeNums[index].style.color = '#ff5f5f';
  likeNums[index].textContent = '1';
}

function likes_init()
{
  for(let i = 0; i < likeButtons.length; i++)
  {
    if (localStorage.getItem("like_" + i) == '1')
    {
      like(i);
    }
    else if (localStorage.getItem("like_" + i) == null) {
      localStorage.setItem("like_" + i, '0');
    }
  }
}

likes_init();

for(let i = 0; i < likeButtons.length; i++)
{
  likeButtons[i].onclick = function()
  {
    if (localStorage.getItem("like_" + i) == '0')
    {
      localStorage.setItem("like_" + i, '1');
      like(i);
    }
    else
    {
      localStorage.setItem("like_" + i, '0');
      defaultButtons[i].style.opacity = 1;
      hoverButtons[i].style.opacity = 0;
      likeButtons[i].style.backgroundColor = '#d8d8d8';
      likeNums[i].style.color = '#575757';
      likeNums[i].textContent = '0';
    }
  }
}