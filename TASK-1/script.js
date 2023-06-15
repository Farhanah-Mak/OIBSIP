const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const navLists = document.querySelector(".nav-lists");
const links = document.querySelectorAll(".nav-list");

//toggle menuButton and close Button

menuBtn.addEventListener("click", () => {
  navLists.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navLists.classList.remove("active");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLists.classList.remove("active");
  });
});
