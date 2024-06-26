document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-navbar li a');

    menuToggle.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
    });

    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const parentLi = this.parentElement;

            if (parentLi.querySelector('.dropdown')) {
                e.preventDefault();
                parentLi.classList.toggle('active');

                const siblingDropdowns = Array.from(parentLi.parentElement.children).filter(
                    li => li !== parentLi
                );
                siblingDropdowns.forEach(li => li.classList.remove('active'));
            } else {
                menuOverlay.classList.remove('active');
            }
        });
    });
});
