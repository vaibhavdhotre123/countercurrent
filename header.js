


const slider = document.getElementById('mySlider');
const output = document.getElementById('sliderValue');

let direction = 1;

function moveSlider() {
    let value = parseInt(slider.value);
    value += direction;
    if (value >= 100 || value <= 0) {
        direction *= -1; // Reverse direction
    }
    slider.value = value;
    output.textContent = value;
}



let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;
  document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)



document.getElementById("openButton").addEventListener("click", function() {
  document.getElementById("contactForm").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("contactForm").style.display = "none";
});
