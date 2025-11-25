// ============================
// MENÚ HAMBURGUESA
// ============================
const navMenu = document.getElementById("nav-links");
const navLinks = navMenu.querySelectorAll("a");

function toggleMenu() {
  navMenu.classList.toggle("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});


// ============================
// CARRUSEL AUTOMÁTICO
// ============================

// TOMAMOS TODAS LAS LANDING DEL PORTFOLIO.HTML
fetch("portfolio.html")
  .then(res => res.text())
  .then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let allPortfolioImages = doc.querySelectorAll(".project img");

    const sliderContainer = document.getElementById("carousel-dynamic");

    allPortfolioImages.forEach(img => {
      sliderContainer.innerHTML += `
        <div class="swiper-slide">
            <img src="${img.src}">
            <div class="slide-title">${img.dataset.title}</div>
            <a href="${img.dataset.link}" class="view-btn" target="_blank">Ver landing completa</a>
        </div>`;
    });

    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 220,
        modifier: 2,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });

  });


// ============================
// LIGHTBOX
// ============================
const galleryItems = document.querySelectorAll(".project img");
let currentIndex = 0;

galleryItems.forEach((img, i) => {
  img.addEventListener("click", () => openGallery(i));
});

function openGallery(i) {
  currentIndex = i;
  const img = galleryItems[i];

  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-title").textContent = img.dataset.title;

  const link = document.getElementById("lightbox-link");
  link.href = img.dataset.link;

  document.getElementById("lightbox").style.display = "flex";
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + galleryItems.length) % galleryItems.length;
  openGallery(currentIndex);
}

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").style.display = "none";
  }
});