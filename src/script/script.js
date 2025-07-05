// header......
const header = document.getElementById("header");
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    header.innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

//loader.............................
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 800);
});

// Bar btn for mobile menu toggle
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

//  Skill Cards...........................
// const Cards = [
//   {
//     title : 'HTML',
//     description : 'Hypertext Markup Language Backbone Of Web Development:',
//     icon : 'fa-brands fa-html5',
//     color : 'bg-orange-500',
//     textColor : 'text-white',
//   },
//   {
//     title : 'CSS',
//     description : 'Cascading Style Sheets For Styling Web Pages:',
//     icon : 'fa-brands fa-css3-alt',
//     color : 'bg-blue-500',
//     textColor : 'text-white',
//   },
//   {
//     title : 'JavaScript',
//     description : 'Dynamic Programming Language For Web Development:',
//     icon : 'fa-brands fa-js',
//     color : 'bg-red-500',
//     textColor : 'text-white',
//   },
//   {
//     title : 'React',
//     description : 'JavaScript Library For Building User Interfaces:',
//     icon : 'fa-brands fa-react',
//     color : 'bg-cyan-400',
//     textColor : 'text-white'
//   }
// ]
