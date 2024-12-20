// document.addEventListener('DOMContentLoaded', function () {
//     const onceButton = document.querySelector('.once');
//     const monthlyButton = document.querySelector('.monthly');
//     const amountOnceDiv = document.querySelector('.amount-once');
//     const amountOptionsDiv = document.querySelector('.amount-options');
//     const donateButton = document.querySelector('.donate3-button');
//     const donationContent = document.querySelector('.donation-content');
//     const donorInfoSection = document.querySelector('.donor-info');

//     // Update the custom amount input when an amount button is clicked
//     const customAmountInput = document.querySelector('.custom-amount input');
//     document.querySelectorAll('.amount-once button, .amount-options button').forEach(function(button) {
//         button.addEventListener('click', function() {
//             customAmountInput.value = this.textContent;
//         });
//     });

//     onceButton.addEventListener('click', function () {
//         onceButton.classList.add('active');
//         monthlyButton.classList.remove('active');
//         amountOnceDiv.style.display = 'flex';
//         amountOptionsDiv.style.display = 'none';
//         donateButton.textContent = 'Donate Once';
//     });

//     monthlyButton.addEventListener('click', function () {
//         monthlyButton.classList.add('active');
//         onceButton.classList.remove('active');
//         amountOnceDiv.style.display = 'none';
//         amountOptionsDiv.style.display = 'flex';
//         donateButton.textContent = 'Donate Monthly';
//     });

//     donateButton.addEventListener('click', function() {
//         // Hide the current donation content
//         donationContent.style.display = 'none';

//         // Show the donor info section
//         donorInfoSection.style.display = 'block';
//     });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const backArrow = document.querySelector('.back-arrow');
//     const donationContent = document.querySelector('.donation-content');
//     const donorInfoSection = document.querySelector('.donor-info');

//     backArrow.addEventListener('click', function() {
//         // Show the previous donation content
//         donationContent.style.display = 'block';

//         // Hide the donor info section
//         donorInfoSection.style.display = 'none';
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const openPopupButton = document.querySelector('.open-popup-button'); // Button that triggers the pop-up
//     const donationPopup = document.getElementById('donation-popup');
//     const popupClose = document.querySelector('.popup-close');

//     // Show the pop-up
//     openPopupButton.addEventListener('click', function () {
//         donationPopup.style.display = 'flex';
//     });

//     // Hide the pop-up
//     popupClose.addEventListener('click', function () {
//         donationPopup.style.display = 'none';
//     });

//     // Close the pop-up if the overlay is clicked
//     donationPopup.addEventListener('click', function (e) {
//         if (e.target === donationPopup) {
//             donationPopup.style.display = 'none';
//         }
//     });
// });
//  // Open popup
//  document.getElementById('open-donation-popup').addEventListener('click', function (event) {
//     event.preventDefault();
//     donationPopup.style.display = 'block';
// });

// // Close popup
// popupClose.addEventListener('click', function () {
//     donationPopup.style.display = 'none';
// });

// // Close popup when clicking outside of the content
// window.addEventListener('click', function (event) {
//     if (event.target === donationPopup) {
//         donationPopup.style.display = 'none';
//     }
// });

