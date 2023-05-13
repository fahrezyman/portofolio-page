// Toggle navbar to active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle and remove to click anywhere
const hamburgerClick = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerClick.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
