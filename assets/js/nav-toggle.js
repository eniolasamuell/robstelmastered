const toggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav-items");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});