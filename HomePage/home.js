document.addEventListener("DOMContentLoaded", function() {
    fetchLatestNews();

    function fetchLatestNews() {
        const url = 'https://api.dablie.org/news?page=1&pagination=3';
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.status !== 'success' || !data.articles || data.articles.length === 0) {
                throw new Error('Invalid data structure');
            }
            displayLatestNews(data.articles);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    function displayLatestNews(articles) {
        const storiesContainer = document.getElementById('stories_container');
        storiesContainer.innerHTML = '';

        articles.forEach(article => {
            const storyBox = document.createElement('div');
            storyBox.classList.add('stories_box');
            storyBox.innerHTML = `
                <img src="../data/images/${article.image}" alt="${article.headline}">
                <label>${article.headline}</label>
                <p>${truncateText(article.description, 3)}</p>
                <a href="./stories/story.html?id=${article.id}" class="read_more_link">Read More</a>
            `;
            storiesContainer.appendChild(storyBox);
        });
    }

    function truncateText(text, lines) {
        const words = text.split(' ');
        let result = '';
        let lineCount = 0;
        for (let i = 0; i < words.length; i++) {
            result += words[i] + ' ';
            if ((i + 1) % 8 === 0) {
                lineCount++;
            }
            if (lineCount >= lines) {
                result = result.trim() + '...';
                break;
            }
        }
        return result.trim();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Variables for buttons and sections
    const onceButton = document.querySelector('.once');
    const monthlyButton = document.querySelector('.monthly');
    const amountOnceDiv = document.querySelector('.amount-once');
    const amountOptionsDiv = document.querySelector('.amount-options');
    const donateButton = document.querySelector('.donate3-button');
    const donorInfoSection = document.querySelector('.donor-info');
    const donationPopup = document.getElementById('donation-popup');
    const popupClose = document.querySelector('.popup-close');
    const customAmountInput = document.querySelector('.custom-amount input');
    const currencySelector = document.getElementById('currency-selector');

    // Get buttons to open the donation popup
    const openPopupBtns = [
    document.getElementById('open-donation-popup-header'),
    document.getElementById('open-donation-popup-new'),
    document.getElementById('open-donation-popup-footer')
    ];

    // Add event listeners to both buttons to open the popup
    openPopupBtns.forEach(function(button) {
        if (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                donationPopup.style.display = 'flex'; // Show the popup
            });
        }
    });

    // Close popup
    if (popupClose) {
        popupClose.addEventListener('click', function () {
            donationPopup.style.display = 'none'; // Hide the popup
        });
    }

    // Update the custom amount input when an amount button is clicked
    document.querySelectorAll('.amount-once button, .amount-options button').forEach(function(button) {
        button.addEventListener('click', function() {
            customAmountInput.value = this.textContent;
        });
    });

    // Switch between 'Once' and 'Monthly' donation options
    onceButton.addEventListener('click', function () {
        onceButton.classList.add('active');
        monthlyButton.classList.remove('active');
        amountOnceDiv.style.display = 'flex';
        amountOptionsDiv.style.display = 'none';
        donateButton.textContent = 'Donate Once';
    });

    monthlyButton.addEventListener('click', function () {
        monthlyButton.classList.add('active');
        onceButton.classList.remove('active');
        amountOnceDiv.style.display = 'none';
        amountOptionsDiv.style.display = 'flex';
        donateButton.textContent = 'Donate Monthly';
    });

    // Close popup when clicking outside of the content
    window.addEventListener('click', function (event) {
        if (event.target === donationPopup) {
            donationPopup.style.display = 'none';
        }
    });

    // Handle donation button click
    donateButton.addEventListener('click', function () {
        // Get the selected amount
        let amount = customAmountInput.value.replace(/,/g, ''); // Remove commas for parsing
        let currency = currencySelector.value;

        // Perform basic validation
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        // Send the donation amount to the backend
        fetch('https://payment.dablie.org/payment?amount=' + amount + '&payment_mode=donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            console.log('Success:', data);
            
            if (data.status === 'pending' && data.checkout_url) {
                // Redirect the user to the provided checkout URL
                window.location.href = data.checkout_url;
            } else if (data.message) {
                // Display an error message if present
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while processing your donation. Please try again.');
        });
    });
});