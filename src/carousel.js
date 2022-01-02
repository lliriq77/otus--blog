let slideIndex = 1;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", minusSlides);
nextButton.addEventListener("click", plusSlides);

showSlides(slideIndex);

function plusSlides() {
  slideIndex += 1;
  showSlides(slideIndex);
}

function minusSlides() {
  slideIndex -= 1;
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel__slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
