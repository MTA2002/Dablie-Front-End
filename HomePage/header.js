document.addEventListener("DOMContentLoaded", function() {
  const menuWrapper = document.querySelector(".menu-wrapper");
  const menuBtn = document.querySelector(".menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mainMenu = document.querySelector(".main-menu");
  const submenu = document.querySelector(".submenu");
  const submenuToggle = document.querySelector(".submenu-toggle");
  const backToMainMenu = document.querySelector(".back-to-main-menu");

  menuWrapper.addEventListener("click", function() {
      menuWrapper.classList.toggle("menu-wrapper-on");
      menuBtn.classList.toggle("menu-btn-on");
      menuOverlay.classList.toggle("open");
  });

  submenuToggle.addEventListener("click", function(event) {
      event.preventDefault();
      mainMenu.classList.add("hidden");
      submenu.classList.add("open");
  });

  backToMainMenu.addEventListener("click", function(event) {
      event.preventDefault();
      mainMenu.classList.remove("hidden");
      submenu.classList.remove("open");
  });

  window.addEventListener("click", function(event) {
      if (!menuWrapper.contains(event.target) && !menuOverlay.contains(event.target)) {
          menuWrapper.classList.remove("menu-wrapper-on");
          menuBtn.classList.remove("menu-btn-on");
          menuOverlay.classList.remove("open");
          mainMenu.classList.remove("hidden");
          submenu.classList.remove("open");
      }
  });
});