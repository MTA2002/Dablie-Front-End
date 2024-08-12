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
                <img src="${article.image}" alt="${article.headline}">
                <label>${article.headline}</label>
                <p>${truncateText(article.description, 3)}</p>
                <a href="./ stories/story.html?id=${article.id}" class="read_more_link">Read More</a>
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

// Get the modal
var modal = document.getElementById("donationModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";

    // Load the content from the donation page
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './ donate', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("modalBody").innerHTML = xhr.responseText;
            initializeDonationScript(); // Call your existing script initialization after content is loaded
        }
    };
    xhr.send();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to initialize your existing script
function initializeDonationScript() {
    const donateOnceButton = document.querySelector('.donation-type button.once');
    const monthlyButton = document.querySelector('.donation-type button:last-child');
    const amountOnceContainer = document.querySelector('.amount-once');
    const amountOptionsContainer = document.querySelector('.amount-options');
    const customAmountInput = document.querySelector('.custom-amount input');

    // Function to toggle active class
    function toggleActiveButton(buttonToActivate, buttonToDeactivate) {
        buttonToActivate.classList.add('active');
        buttonToDeactivate.classList.remove('active');
    }

    // Hide amount buttons when "Donate Once" is clicked and show the "amount-once" options
    donateOnceButton.addEventListener('click', function() {
        amountOptionsContainer.style.display = 'none';
        amountOnceContainer.style.display = 'grid';
        customAmountInput.value = '';
        toggleActiveButton(donateOnceButton, monthlyButton);
    });

    // Hide "amount-once" options and show "amount-options" buttons when "Monthly" is clicked
    monthlyButton.addEventListener('click', function() {
        amountOnceContainer.style.display = 'none';
        amountOptionsContainer.style.display = 'grid';
        toggleActiveButton(monthlyButton, donateOnceButton);
    });

    // Update the custom amount input when an amount button is clicked
    document.querySelectorAll('.amount-once button, .amount-options button').forEach(function(button) {
        button.addEventListener('click', function() {
            customAmountInput.value = this.textContent;
        });
    });
}
