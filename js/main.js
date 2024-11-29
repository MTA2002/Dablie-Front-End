document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-more');

    if (toggleButton) {
        toggleButton.addEventListener('click', function (event) {
            event.preventDefault();

            var hiddenCards = document.querySelectorAll('.program_card.hidden');

            // Show hidden cards
            hiddenCards.forEach(function (card) {
                card.classList.remove('hidden');
            });

            // Hide 'See more' button
            this.style.display = 'none';

            // Display 'See less' button
            var seeLessButton = document.getElementById('see-less');
            if (seeLessButton) {
                seeLessButton.style.display = 'inline-block';
            }
        });
    }

    // Adding 'See less' functionality
    var seeLessButton = document.createElement('a');
    seeLessButton.setAttribute('href', '#');
    seeLessButton.setAttribute('id', 'see-less');
    seeLessButton.innerHTML = 'See less programs <i class="fa-solid fa-angle-up" aria-hidden="true"></i>';
    seeLessButton.style.display = 'none'; // Initially hide the 'See less' button
    toggleButton.parentNode.insertBefore(seeLessButton, toggleButton.nextSibling);

    seeLessButton.addEventListener('click', function (event) {
        event.preventDefault();

        var shownCards = document.querySelectorAll('.program_card:not(.hidden):not(:nth-child(-n+4))'); // Selects the cards that were initially hidden

        // Hide visible cards that were initially hidden
        shownCards.forEach(function (card) {
            card.classList.add('hidden');
        });

        // Show 'See more' button
        toggleButton.style.display = 'inline-block';

        // Hide 'See less' button
        this.style.display = 'none';
    });

    // Update current year in footer
    document.getElementById('current-year-footer').textContent = new Date().getFullYear();
});

// Ensure menu overlay scripts remain functional
document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.querySelector('.menu-icon__cheeckbox');
    if (menuCheckbox) {
        menuCheckbox.addEventListener('change', function () {
            document.querySelector('.menu-overlay').classList.toggle('open');
        });
    }

    var submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var submenuClass = toggle.classList.contains('about-toggle') ? '.about-submenu' : '.programs-submenu';
            document.querySelector(submenuClass).classList.toggle('open');
            document.querySelector('.main-menu').classList.toggle('hidden');
        });
    });

    var backToMainMenus = document.querySelectorAll('.back-to-main-menu');
    backToMainMenus.forEach(function (backButton) {
        backButton.addEventListener('click', function (e) {
            e.preventDefault();
            var submenu = backButton.closest('.submenu');
            submenu.classList.remove('open');
            document.querySelector('.main-menu').classList.remove('hidden');
        });
    });
});
