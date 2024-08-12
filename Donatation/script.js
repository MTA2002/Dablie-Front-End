document.addEventListener('DOMContentLoaded', function() {
    const donateOnceButton = document.querySelector('.donation-type button:first-child');
    const monthlyButton = document.querySelector('.donation-type button:last-child');
    const amountButtons = document.querySelectorAll('.amount-options button');
    const customAmountInput = document.querySelector('.custom-amount input');
    const amountOptionsContainer = document.querySelector('.amount-options');

    // Function to toggle active class
    function toggleActiveButton(buttonToActivate, buttonToDeactivate) {
        buttonToActivate.classList.add('active');
        buttonToDeactivate.classList.remove('active');
    }

    // Hide amount buttons when "Donate Once" is clicked and change button color
    donateOnceButton.addEventListener('click', function() {
        amountOptionsContainer.classList.remove('show');
        setTimeout(() => amountOptionsContainer.style.display = 'none', 500); // Delayed hiding to allow fade-out
        customAmountInput.value = '';
        toggleActiveButton(donateOnceButton, monthlyButton);
    });

    // Show amount buttons when "Monthly" is clicked and change button color
    monthlyButton.addEventListener('click', function() {
        amountOptionsContainer.style.display = 'grid'; // Ensure it uses the grid layout
        setTimeout(() => amountOptionsContainer.classList.add('show'), 10); // Delayed show to allow fade-in
        toggleActiveButton(monthlyButton, donateOnceButton);
    });

    // Update the custom amount input when an amount button is clicked
    amountButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            customAmountInput.value = this.textContent;
        });
    });
});