document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const dropdowns = document.querySelectorAll('.mobile-navbar li a');

    menuToggle.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');

            const siblingDropdowns = Array.from(parentLi.parentElement.children).filter(
                li => li !== parentLi
            );
            siblingDropdowns.forEach(li => li.classList.remove('active'));
        });
    });
});