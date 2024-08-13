// document.addEventListener('DOMContentLoaded', function() {
//     const donateOnceButton = document.querySelector('.donation-type button.once');
//     const monthlyButton = document.querySelector('.donation-type button:last-child');
//     const amountOnceContainer = document.querySelector('.amount-once');
//     const amountOptionsContainer = document.querySelector('.amount-options');
//     const customAmountInput = document.querySelector('.custom-amount input');

//     // Function to toggle active class
//     function toggleActiveButton(buttonToActivate, buttonToDeactivate) {
//         buttonToActivate.classList.add('active');
//         buttonToDeactivate.classList.remove('active');
//     }

//     // Hide amount buttons when "Donate Once" is clicked and show the "amount-once" options
//     donateOnceButton.addEventListener('click', function() {
//         amountOptionsContainer.style.display = 'none';
//         amountOnceContainer.style.display = 'grid';
//         customAmountInput.value = '';
//         toggleActiveButton(donateOnceButton, monthlyButton);
//     });

//     // Hide "amount-once" options and show "amount-options" buttons when "Monthly" is clicked
//     monthlyButton.addEventListener('click', function() {
//         amountOnceContainer.style.display = 'none';
//         amountOptionsContainer.style.display = 'grid';
//         toggleActiveButton(monthlyButton, donateOnceButton);
//     });

//     // Update the custom amount input when an amount button is clicked
//     document.querySelectorAll('.amount-once button, .amount-options button').forEach(function(button) {
//         button.addEventListener('click', function() {
//             customAmountInput.value = this.textContent;
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const onceButton = document.querySelector('.once');
    const monthlyButton = document.querySelector('.monthly');
    const amountOnceDiv = document.querySelector('.amount-once');
    const amountOptionsDiv = document.querySelector('.amount-options');
    const donateButton = document.querySelector('.donate3-button');

    onceButton.addEventListener('click', function () {
        onceButton.classList.add('active');
        monthlyButton.classList.remove('active');
        amountOnceDiv.style.display = 'grid';
        amountOptionsDiv.style.display = 'none';
        donateButton.textContent = 'Donate Once';
    });

    monthlyButton.addEventListener('click', function () {
        monthlyButton.classList.add('active');
        onceButton.classList.remove('active');
        amountOnceDiv.style.display = 'none';
        amountOptionsDiv.style.display = 'grid';
        donateButton.textContent = 'Donate Monthly';
    });
});
