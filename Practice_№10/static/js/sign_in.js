const submit_button = document.querySelector('.sigh_in_form .submit');
submit_button.onclick = function() {
  window.location.href = 'home.html';
  change_status();
};