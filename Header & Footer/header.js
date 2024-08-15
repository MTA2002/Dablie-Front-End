document.addEventListener("DOMContentLoaded", function () {
    const menuWrapper = document.querySelector(".menu-wrapper");
    const menuBtn = document.querySelector(".menu-btn");
    const menuOverlay = document.querySelector(".menu-overlay");
    const mainMenu = document.querySelector(".main-menu");
    const programsSubmenu = document.querySelector(".programs-submenu");
    const aboutSubmenu = document.querySelector(".about-submenu");
    const programsToggle = document.querySelector(".programs-toggle");
    const aboutToggle = document.querySelector(".about-toggle");
    const backToMainMenuLinks = document.querySelectorAll(".back-to-main-menu");
    const socialMedia = document.querySelector('.social-media');

    menuWrapper.addEventListener("click", function () {
        menuWrapper.classList.toggle("menu-wrapper-on");
        menuBtn.classList.toggle("menu-btn-on");
        menuOverlay.classList.toggle("open");
    });

    programsToggle.addEventListener("click", function (event) {
        event.preventDefault();
        mainMenu.classList.add("hidden");
        programsSubmenu.classList.add("open");
        socialMedia.classList.add('hidden');
    });

    aboutToggle.addEventListener("click", function (event) {
        event.preventDefault();
        mainMenu.classList.add("hidden");
        aboutSubmenu.classList.add("open");
        socialMedia.classList.add('hidden');
    });

    backToMainMenuLinks.forEach(function (backToMainMenu) {
        backToMainMenu.addEventListener("click", function (event) {
            event.preventDefault();
            mainMenu.classList.remove("hidden");
            programsSubmenu.classList.remove("open");
            aboutSubmenu.classList.remove("open");
            socialMedia.classList.remove('hidden');
        });
    });

    window.addEventListener("click", function (event) {
        if (!menuWrapper.contains(event.target) && !menuOverlay.contains(event.target)) {
            menuWrapper.classList.remove("menu-wrapper-on");
            menuBtn.classList.remove("menu-btn-on");
            menuOverlay.classList.remove("open");
            mainMenu.classList.remove("hidden");
            programsSubmenu.classList.remove("open");
            aboutSubmenu.classList.remove("open");
            socialMedia.classList.remove('hidden');
        }
    });
});