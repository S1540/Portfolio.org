const header = document.getElementById("header");
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    header.innerHTML = data;
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    let isOpen = false;

    menuBtn.addEventListener("click", () => {
      isOpen = !isOpen;
      if (isOpen) {
        mobileMenu.classList.remove("scale-y-0", "opacity-0");
        mobileMenu.classList.add("scale-y-100", "opacity-100");
      } else {
        mobileMenu.classList.add("scale-y-0", "opacity-0");
        mobileMenu.classList.remove("scale-y-100", "opacity-100");
      }
    });
  })
  .catch((error) => console.error("Error loading header:", error));

//loader.............................
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800);
});
// scrolling animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-20");
      entry.target.classList.add("opacity-100", "translate-y-0");
    } else {
      entry.target.classList.remove("opacity-100", "translate-y-0");
      entry.target.classList.add("opacity-0", "translate-y-20");
    }
  });
});
document.querySelectorAll(".scroll-reval").forEach((el) => {
  observer.observe(el);
});
// Social Card
const Social = document.querySelector("#Social-card");
fetch("SocialCard.html")
  .then((response) => response.text())
  .then((data) => {
    Social.innerHTML = data;
  });

//
const footer = document.getElementById("footerSec");
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    footer.innerHTML = data;
  });
