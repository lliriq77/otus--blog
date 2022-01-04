import "./css/index.css";

import Media1 from "./assets/1media.jpg";
import Media2 from "./assets/2-media.png";
import Media3 from "./assets/3-media.png";

function carouselInit(el) {
  el.innerHTML = `
  <div class="carousel__slide"></div>
  <div class="carousel__slide"></div>
  <div class="carousel__slide"></div>
  <a class="prev">&#10094;</a>
  <a class="next">&#10095;</a>
  `;

  const slide1 = new Image();
  slide1.src = Media1;
  document.querySelectorAll(".carousel__slide")[0].append(slide1);

  const slide2 = new Image();
  slide2.src = Media2;
  document.querySelectorAll(".carousel__slide")[1].append(slide2);

  const slide3 = new Image();
  slide3.src = Media3;
  document.querySelectorAll(".carousel__slide")[2].append(slide3);

  let slideIndex = 1;
  const prevButton = el.querySelector(".prev");
  const nextButton = el.querySelector(".next");

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
}

carouselInit(document.querySelector(".carousel"));
