const likeButtons = document.querySelectorAll(".like");
const defaultButtons = document.querySelectorAll(".default");
const hoverButtons = document.querySelectorAll(".hover");
const likeNums = document.querySelectorAll(".likes_num");

let likes = Array.apply(null, Array(likeButtons.length)).map(function () { return false; });
let cnt_likes = Array.apply(null, Array(likeButtons.length)).map(function () { return 0; });

for(let i = 0;  i < likeButtons.length; i++)
{
  likeButtons[i].onclick = function()
  {  
    likes[i] = !likes[i];
    if (likes[i])
    {
      defaultButtons[i].style.opacity = 0;
      hoverButtons[i].style.opacity = 1;
      likeButtons[i].style.backgroundColor = '#ffdada';
      likeNums[i].style.color = '#ff5f5f';
      cnt_likes[i]++;
    }
    else
    {
      defaultButtons[i].style.opacity = 1;
      hoverButtons[i].style.opacity = 0;
      likeButtons[i].style.backgroundColor = '#d8d8d8';
      likeNums[i].style.color = '#575757';
      cnt_likes[i]--;
    }
    likeNums[i].textContent = cnt_likes[i].toString();
  }
}