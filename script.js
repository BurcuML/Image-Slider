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
  explanations[i].style.display = "none";
}

//Neden "% images.length" Yapıyoruz?
// Çünkü toplamda kaç tane resim varsa o kadar döngü yapması lazım.
// Eğer 5 tane resim varsa 0-4 arasında döngü yapar. Eğer 6. resme geçerse 0'a döner.
// Yani 5'e bölünce kalan 0 olur. Bu yüzden % kullanıyoruz.
//Eğer % kullanmasaydık, son resmi geçince hata verirdi veya undefined olurdu.
prev.addEventListener("click", () => {
  currentImg = (currentImg - 1 + totalImages) % totalImages;

  allImages.forEach((img, index) => {
    img.style.display = index === currentImg ? "inline" : "none";
    explanations[index].style.display = index === currentImg ? "block" : "none";
  });
});


next.addEventListener("click", () => {

  currentImg = (currentImg + 1) % totalImages;

  allImages.forEach((img, index) => {
    img.style.display = index === currentImg ? "inline" : "none";
    explanations[index].style.display = index === currentImg ? "block" : "none";
  });
});
