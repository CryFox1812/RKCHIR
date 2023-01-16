const hrefs = document.querySelectorAll('a[href^="#"]');

for(let href of hrefs) {
  href.addEventListener("click", function(e) {
    e.preventDefault();
    const block = href.getAttribute('href');
    document.querySelector(block).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}