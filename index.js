const buttons = document.querySelectorAll("[data-carousel-button]");
const randomize = document.querySelector("[data-randomize]");
const slide = document.getElementsByClassName("slide");
const images = document.getElementsByTagName("img");
let inc = 1600;

randomize.addEventListener("click", () => {
  inc++;
  for (let index = 0; index < images.length; index++) {
    inc = index + inc;
    images[index].src = `https://source.unsplash.com/random/${inc}x${inc}`;
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
