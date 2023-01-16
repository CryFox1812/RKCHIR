const phars = document.querySelectorAll('.href_box a');
const button = document.querySelector('.href_box h3');

let is_active = false
button.onclick = function()
{
  if (is_active == false)
  {
    phars.forEach(element => {
      element.style.display = 'block';
    });
    button.textContent = 'List of sections -';
  }
  else
  {
    phars.forEach(element => {
      element.style.display = 'none';
    });
    button.textContent = 'List of sections +';
  }
  is_active = !is_active;
}