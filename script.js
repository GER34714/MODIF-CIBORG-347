/* -------- MENÚ -------- */
let autoClose;
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("menu-overlay");

  if(menu.classList.contains("mobile-active")){
    closeMenu();
  } else {
    menu.classList.add("mobile-active");
    overlay.style.display = "block";

    clearTimeout(autoClose);
    autoClose = setTimeout(() => closeMenu(), 5000);
  }
}

function closeMenu(){
  document.getElementById("mobile-menu").classList.remove("mobile-active");
  document.getElementById("menu-overlay").style.display="none";
  clearTimeout(autoClose);
}

/* ===================== CARRUSEL GLOBAL ===================== */

let allSlides = [
  {category:"estetica", img:"https://iili.io/KPyCnHu.jpg", link:"https://adda-nails.onrender.com/", short:"Mostrá tu trabajo con un diseño limpio y profesional.", info:"Landing pensada para estudios de belleza que necesitan transmitir prolijidad, estilo y confianza."},
  {category:"barber", img:"https://iili.io/KPyvEcx.jpg", link:"https://barberia-elbebu.onrender.com/", short:"Presencia fuerte que posiciona tu barbería como marca.", info:"Estética moderna y masculina que genera autoridad."},
  {category:"barber", img:"https://iili.io/KPyUCn1.jpg", link:"https://barber-shop-rodri.onrender.com/", short:"Elegancia y estilo en cada detalle.", info:"Diseño orientado a barberías que quieren diferenciarse."},
  {category:"food", img:"https://iili.io/fF5pLGf.jpg", link:"https://dulce-juana.onrender.com/", short:"Imágenes irresistibles que generan ventas.", info:"Landing cálida y visual, perfecta para gastronomía."},
  {category:"evento", img:"https://iili.io/f9a9K5Q.jpg", link:"https://tio-sergio.onrender.com", short:"Energía y ambiente en un diseño impactante.", info:"Ideal para salones y bailables."},
  {category:"radio", img:"https://iili.io/f9an4yX.jpg", link:"https://radioimagen.onrender.com", short:"Tu radio con presencia moderna.", info:"Streaming integrado y visual profesional."},
  {category:"casino", img:"https://iili.io/KPygQXS.jpg", link:"https://facu-casino.onrender.com/", short:"Diseño directo para captar jugadores.", info:"Estética intensa y conversiones rápidas."},
  {category:"casino", img:"https://iili.io/KPyrMj2.jpg", link:"https://dragon-casino.onrender.com/", short:"Energía visual para atraer usuarios.", info:"Landing con estilo fuego y dinamismo."},
  {category:"casino", img:"https://iili.io/KPyDVHP.jpg", link:"https://dinasty-bet.onrender.com/", short:"Identidad deportiva sólida.", info:"Perfecta para apuestas y deportes."},
  {category:"casino", img:"https://iili.io/KigNdVS.jpg", link:"https://giraygana-fortunaplay.onrender.com/", short:"Diseño veloz y llamativo.", info:"Enfocada en interacción rápida."},
  {category:"casino", img:"https://iili.io/Kigv3Ij.jpg", link:"https://ganamostodosjuntos.onrender.com/", short:"Impacto fuerte para gaming.", info:"Ideal para promociones continuas."},
  {category:"casino", img:"https://iili.io/KiggTcN.jpg", link:"https://lions-casino.onrender.com/", short:"Identidad premium.", info:"Estética limpia y profesional."},
  {category:"casino", img:"https://iili.io/f9a9Fdx.jpg", link:"https://giraygana-ijae.onrender.com", short:"Máxima rapidez para captar curiosos.", info:"Diseño simple y efectivo."}
];

let index = 0;

/* --- CATEGORÍAS --- */
const categories = [
  {id:"estetica", name:"Estética"},
  {id:"barber", name:"Barberías"},
  {id:"food", name:"Gastronomía"},
  {id:"evento", name:"Eventos"},
  {id:"radio", name:"Radios"},
  {id:"casino", name:"Casinos"}
];

let catContainer = document.getElementById("category-buttons");

categories.forEach(cat => {
  let btn = document.createElement("button");
  btn.innerText = cat.name;
  btn.onclick = () => jumpToCategory(cat.id);
  catContainer.appendChild(btn);
});

function updateCategoryHighlight(){
  const activeCat = allSlides[index].category;
  document.querySelectorAll(".categories button").forEach(btn => {
    btn.classList.remove("active");
    if(btn.innerText === categories.find(c=>c.id===activeCat).name){
      btn.classList.add("active");
    }
  });
}

function jumpToCategory(cat){
  index = allSlides.findIndex(x => x.category === cat);
  updateCarousel();
}

function updateCarousel(){
  const s = allSlides[index];
  if(!s) return;

  document.getElementById("carousel-img").src = s.img;
  document.getElementById("carousel-short").innerText = s.short;
  document.getElementById("carousel-info").innerText = s.info;
  document.getElementById("carousel-btn").href = s.link;

  updateCategoryHighlight();
}

function nextSlide(){
  index = (index + 1) % allSlides.length;
  updateCarousel();
}
function prevSlide(){
  index = (index - 1 + allSlides.length) % allSlides.length;
  updateCarousel();
}

/* SWIPE */
let startX = 0;
document.getElementById("carousel").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.getElementById("carousel").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if(endX < startX - 50) nextSlide();
  if(endX > startX + 50) prevSlide();
});

/* INIT */
updateCarousel();

/* TIPS */
const tips = [
  "Tip: Una landing clara convierte más clics en ventas.",
  "Tip: Un CTA fuerte aumenta conversiones hasta un 40%.",
  "Tip: Las imágenes profesionales venden más.",
  "Tip: Tu web debe cargar rápido para retener clientes.",
  "Tip: La primera impresión define si confían en tu negocio."
];

let tipIndex = 0;
setInterval(() => {
  tipIndex = (tipIndex + 1) % tips.length;
  document.getElementById("tip-text").innerText = tips[tipIndex];
}, 4000);