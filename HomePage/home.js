document.addEventListener("DOMContentLoaded", function() {
    fetchLatestNews();

    function fetchLatestNews() {
        const url = 'http://64.112.124.78:8000/news?page=1&pagination=3';
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
                <img src="http://64.112.124.78/data/images/${article.image}" alt="${article.headline}">
                <label>${article.headline}</label>
                <p>${truncateText(article.description, 3)}</p>
                <a href="./Stories/story.html?id=${article.id}" class="read_more_link">Read More</a>
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