const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-20");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
});
document.querySelectorAll(".scroll-reval").forEach((el) => {
  observer.observe(el);
});
