const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = document.querySelector(".images");
const explanations = document.querySelectorAll(".exp");
const allImages = document.querySelectorAll(".images img");

let currentImg = 0;
const totalImages = allImages.length;
const totalExplanations = explanations.length;

// Hide all images except the first one
for (let i = 1; i < totalImages; i++) {
  allImages[i].style.display = "none";
}

prev.addEventListener("click", () => {
    // Scroll to the left by the width of the images container
  images.scrollLeft -= images.offsetWidth;
});
next.addEventListener("click", () => {
    // Scroll to the right by the width of the images container
  images.scrollLeft += images.offsetWidth;
}); 
