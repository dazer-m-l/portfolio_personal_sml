document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__menu-item a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

function toggleMenu() {
    document.querySelector(".nav__menu").classList.toggle("active");
  }
  
  document.querySelector(".nav__toggle").addEventListener("click", toggleMenu);
  
  document.querySelectorAll(".nav__menu a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth"
        });
      }
  
      document.querySelector(".nav__menu").classList.remove("active");
    });
  });
  