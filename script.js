const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = document.querySelector(".images");
const slides = document.querySelector(".slides");
const allImages = document.querySelectorAll(".images img");


prev.addEventListener("click", () => {
    // Scroll to the left by the width of the images container
  images.scrollLeft -= images.offsetWidth;
});
next.addEventListener("click", () => {
    // Scroll to the right by the width of the images container
  images.scrollLeft += images.offsetWidth;
}); 
