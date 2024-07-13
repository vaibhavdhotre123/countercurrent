const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

setInterval(nextSlide, 4000); // 4 seconds interval

// Initial setup
slider.style.width = `${slides.length * slideWidth}px`;
