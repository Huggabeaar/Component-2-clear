document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  const tabs = document.querySelectorAll('.tab');
  const slideWidth = 1140;
  let currentSlide = 0;

  slider.style.width = slideWidth * slides.length + 'px';

  function showSlide(index) {
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
});