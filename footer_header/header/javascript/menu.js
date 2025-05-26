const hamburger = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

// Abre e fecha o menu com o clique no hambúrguer
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fecha o menu quando clica em algum link
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
