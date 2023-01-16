let submit_button = document.querySelector('.sigh_in_form .submit');
submit_button.onclick = function() {
  window.location.href = 'home.html';
  change_href_sign_in_img();
  console.log(href_sign_in_img);
};