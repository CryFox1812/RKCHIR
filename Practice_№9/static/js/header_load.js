function headerText()
{
  return `<div class="header">
  <nav class="top_nav">
    <ul class="menu">
      <li><a class="nav_home" href="home.html">home</a></li>
      <li><a class="nav_innovations" href="innovations.html">inn<span class="nav_o">o</span>vations</a></li>
      <li><a class="nav_history" href="history.html">history</a></li>
    </ul>
  </nav>
  <div class="sign_in">
    <a href="sign_in.html">
      <img class="sign_in_img" src=`
      + href_sign_in_img +
      `>
    </a>
  </div>
  </div>`
}

function setHeader() {
  let header =  document.createElement("header");
  header.innerHTML = headerText();
  document.body.insertAdjacentElement('afterbegin', header);
}

setHeader();