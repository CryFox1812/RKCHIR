const footerText = 
`
  <div class="social_network_container">

    <div class="social_network">
      <div class="icon">
        <img src="static/img/footer/twitter.png">
      </div>
    </div>

    <div class="social_network">
      <div class="icon">
        <img src="static/img/footer/youtube.png">
      </div>
    </div>

    <div class="social_network">
      <div class="icon">
        <img src="static/img/footer/vk.png">
      </div>
    </div>

    <div class="social_network">
      <div class="icon">
        <img src="static/img/footer/instagram.png">
      </div>
    </div>
    
    <div class="social_network">
      <div class="icon">
        <img src="static/img/footer/telegram.png">
      </div>
    </div>
    
  </div>
`

function setFooter() {
  let footer =  document.createElement("footer");
  footer.innerHTML = footerText;
  document.body.insertAdjacentElement('afterend', footer);
}

setFooter();