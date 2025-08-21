// header......
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

//Typewriter effect..................

const texts = ["Frontend Developer...", "UI/UX Designer..."];
let count = 0;
let i = 0;
let isDelete = false;
let speed = 100;
function TypeWriter() {
  const currentText = texts[count % texts.length];
  const displayText = currentText.substring(0, i);
  document.querySelector(".typewriter").innerHTML =
    displayText +
    '<span class ="blinking-cursor text-4xl align-text-top font-thin md:text-5xl">|</span>';
  if (!isDelete) {
    if (i < currentText.length) {
      i++;
      speed = 100;
    } else {
      isDelete = true;
      speed = 1000;
    }
  } else {
    if (i > 0) {
      i--;
      speed = 40;
    } else {
      isDelete = false;
      count++;
      speed = 500;
    }
  }
  setTimeout(TypeWriter, speed);
}
TypeWriter();
// skilss part or animation
const skillsItem = [
  {
    name: "HTML",
    progress: "96%",
    icon: "./assets/html.png",
    color: "bg-red-500",
    colorProgress: "w-[96%]",
  },
  {
    name: "CSS",
    progress: "90%",
    icon: "./assets/css-alt.png",
    color: "bg-blue-500",
    colorProgress: "w-[90%]",
  },
  {
    name: "JavaScript",
    progress: "85%",
    icon: "./assets/javascript.png",
    color: "bg-yellow-500",
    colorProgress: "w-[85%]",
  },
  {
    name: "React",
    progress: "85%",
    icon: "./assets/react.png",
    color: "bg-cyan-400",
    colorProgress: "w-[85%]",
  },
  {
    name: "Tailwind CSS",
    progress: "95%",
    icon: "./assets/tailwind-css.png",
    color: "bg-cyan-500",
    colorProgress: "w-[95%]",
  },
  {
    name: "Bootstrap",
    progress: "70%",
    icon: "./assets/bootstrap.png",
    color: "bg-purple-500",
    colorProgress: "w-[70%]",
  },
];
const container = document.querySelector("#skillDiv");
skillsItem.forEach((skill) => {
  container.innerHTML += `<div class="max-w-lg w-full flex justify-around text-white">
          <img src="${skill.icon}" class="w-20 h-20" />
          <div class="max-w-sm w-full flex flex-col justify-around">
            <div class="w-full flex justify-between">
              <h1>${skill.name}</h1>
              <h1>${skill.progress}</h1>
            </div>
            <div
              class="relative h-2 w-full overflow-hidden bg-gray-300 rounded-md"
            >
              <span
                class="html-bar h-2 w-0 rounded-md  transition-all duration-2000 ease-in-out block"
              ></span>
            </div>
          </div>
        </div>`;
});
window.addEventListener("scroll", () => {
  const section = document.getElementById("skills-bar").getBoundingClientRect();
  if (section.top < window.innerHeight) {
    const htmlBars = document.querySelectorAll(".html-bar");
    htmlBars.forEach((bar, index) => {
      bar.classList.remove("w-0");
      bar.classList.add(skillsItem[index].colorProgress);
      bar.classList.add(skillsItem[index].color);
    });
  }
});

// Social Card
const Social = document.querySelector("#Social-card");
fetch("SocialCard.html")
  .then((response) => response.text())
  .then((data) => {
    Social.innerHTML = data;
  });

// Footer Section

const footer = document.getElementById("footerSec");
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    footer.innerHTML = data;
  });

// Contact Page
