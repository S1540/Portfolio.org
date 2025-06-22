const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove('scale-y-0', 'opacity-0');
      mobileMenu.classList.add('scale-y-100', 'opacity-100');
    } else {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }
  });

//loader.............................
const loader = document.getElementById('loader');
window.addEventListener('load', ()=> {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800)
})
  
const scroll = document.body.style;
scroll.style = 'bg-black'

//Typewriter effect..................

const texts = ['Frontend Developer...', 'UI/UX Designer...']
let count = 0;
let i = 0;
let isDelete = false;
let speed = 100;
 function TypeWriter(){
  const currentText = texts[count % texts.length];
  const displayText = currentText.substring(0, i);
  document.querySelector('.typewriter').innerHTML = displayText + '<span class ="blinking-cursor text-4xl align-text-top font-thin md:text-5xl">|</span>';
  if(!isDelete){
    if(i < currentText.length){
      i++;
      speed = 100;
    }else{
      isDelete = true;
      speed = 1000;
    }
  }else{
    if(i > 0){
      i--;
      speed = 40;
    }else{
      isDelete = false;
      count++;
      speed = 500;
    }
  }
  setTimeout(TypeWriter, speed)
 } TypeWriter();