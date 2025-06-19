let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const total = images.length;

document.querySelector(".next").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % total;
  images[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + total) % total;
  images[currentIndex].classList.add("active");
});
