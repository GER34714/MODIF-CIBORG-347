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
  const lightbox = document.getElementById("lightbox");

  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-title").textContent = img.dataset.title;

  const link = document.getElementById("lightbox-link");
  link.href = img.dataset.link;
  link.textContent = "Ver landing completa (" + img.dataset.title + ")";

  lightbox.style.display = "flex";
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


// ============================
// CARRUSEL AUTOMÁTICO (SWIPER)
// ============================

// Seleccionamos el contenedor del carrusel dinámico
const sliderContainer = document.getElementById("carousel-dynamic");

// Recorremos todas las imágenes de proyectos
galleryItems.forEach(img => {

  const title = img.dataset.title;
  const link = img.dataset.link;
  const src = img.src;

  // Creamos cada slide
  sliderContainer.innerHTML += `
        <div class="swiper-slide">
            <img src="${src}" alt="${title}">
            <div class="slide-title">${title}</div>
            <a href="${link}" target="_blank" class="view-btn">Ver landing completa</a>
        </div>
    `;
});

// Inicializamos Swiper
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