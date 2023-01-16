const headerText = 
`
  <div class="header">
      <input id="menu_toggle" type="checkbox">
      <label class="menu_button_container" for="menu_toggle">
        <div class="menu_button"></div>
      </label>

    <nav class="top_nav">
      <ul class="menu">
        <li><a class="nav_home" href="home.html">home</a></li>
        <li><a class="nav_innovations" href="innovations.html">inn<span class="nav_o">o</span>vations</a></li>
        <li><a class="nav_history" href="history.html">history</a></li>
      </ul>
    </nav>
    <div class="status">
    </div>
  </div>
`

function setHeader() {
  let header =  document.createElement("header");
  header.innerHTML = headerText;
  document.body.insertAdjacentElement('beforebegin', header);

  init_status();
  console.log(localStorage.src);

  link = document.createElement("a");
  link.href = localStorage.href;
  picture = document.createElement("img");
  picture.className = localStorage.className;
  picture.src = localStorage.src;
  link.appendChild(picture);
  document.querySelector(".status").appendChild(link);
}

setHeader();