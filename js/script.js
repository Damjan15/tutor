// ====== TOGGLE HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", function () {
  // Get hamburger button and mobile menu items
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  // Add click event listener to toggle mobile menu visibility
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

// ====== CHANGE NAVBAR BACKGROUND COLOR ON SCROLL ======
window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
