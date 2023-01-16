const sign_in = 
{
  status: "sign_in",
  href: "sign_in.html", 
  className: "sign_in_img", 
  src: "static/img/sign-in.png"
};
const profile = 
{
  status: "profile",
  href: "profile.html", 
  className: "profile_img", 
  src: "static/img/profile.png"
};

function set_status(Status) 
{ 
  localStorage.setItem('status', Status.status);
  localStorage.setItem('href', Status.href);
  localStorage.setItem('className', Status.className);
  localStorage.setItem('src', Status.src);
}

function init_status()
{
  if (localStorage.getItem('status') == null) {
    set_status(sign_in);
  }
}

function change_status()
{
  if (localStorage.getItem('status') == "sign_in")
  {
    set_status(profile);
  } else {
    set_status(sign_in);
  }
}