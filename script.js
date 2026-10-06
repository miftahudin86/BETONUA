const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("header");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
navLinks.forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  document.getElementById("header").style.boxShadow =
    window.scrollY > 20 ? "0 8px 25px rgba(0,0,0,.18)" : "none";
});
