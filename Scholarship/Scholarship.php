<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scholarship</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="../Header & Footer/header.css">
    <link rel="stylesheet" href="../Header & Footer/footer.css">
    <link rel="stylesheet" href="./Scholarship.css">
    <link rel="icon" type="image/x-icon" href="../HomePage/images/Dablie_logo.png">
</head>
<body>
    <div data-include="../Header & Footer/header.html"></div>

    <section class="youth_hero">
        <div class="hero_header" style="margin-top: 79px;">
            <span id="pr">Programs</span>
        </div>
        <h1>The Dablie Foundation<br><span>Scholarship</span> Program</h1>
        <div class="youth_icons">
            <img src="../leadership page/assests/icons/telegram.png" alt="">
            <img src="../leadership page/assests/icons/instagram.png" alt="">
            <img src="../leadership page/assests/icons/linkedin_icon.png" alt="">
        </div>
        <p class="headtext">At the Dablie Foundation, we believe in nurturing leaders who embody the spirit of "serving to lead, leading to serve," aligned with the core principles of Islamic leadership. Through our two Leadership Programs, we foster individuals who are empowered to contribute positively to their communities, guided by faith and integrity.</p>
    </section>  
    <section class="Ready">
        <div class="ready_box">
            <div class="ready_written">
                <p class="subtitle2">Scholarship Partnerships</p>
                <div class="points">
                    <ul>
                        <li><span>Collaborating</span> with local schools, universities, and international organizations to offer scholarships for various academic levels.</li>
                        <li>These scholarships prioritize access to quality education, enabling individuals to pursue their chosen fields of study.</li>
                        <li>We focus on supporting under-represented communities, ensuring equal opportunities for all.</li>
                    </ul>
                </div>
            </div>
            <div class="ready_picture">
                <img src="../leadership page/assests/images/background1.jpg" alt="">
            </div>
        </div>
        <div class="ready_box2">
            <div class="ready_picture">
                <img src="../leadership page/assests/images/background1.jpg" alt="">
            </div>
            <div class="ready_written">
                <p class="subtitle2">International Scholarship Preparation</p>
                <div class="points">
                    <ul>
                        <li><span>Recognizing</span> the transformative power of global education, we help ambitious individuals navigate the challenging path to international scholarships.</li>
                        <li>We provide mentorship and material support, guiding students through application processes and equipping them with necessary skills.</li>
                        <li>We focus on supporting under-represented communities, ensuring equal opportunities for all.</li>
                    </ul>
               </div>
            </div>
        </div>
        <div class="ready_box">
            <div class="ready_written">
                <p class="subtitle2">Integrated Scholarships</p>
                <div class="points">
                    <ul>
                        <li><span>Our educational and skill</span> development programs often include scholarship opportunities.</li>
                        <li>We provide mentorship and material support, guiding students through application processes and equipping them with necessary skills.</li>
                        <li>We focus on supporting under-represented communities, ensuring equal opportunities for all.</li>
                    </ul>
                </div>
            </div>
            <div class="ready_picture">
                <img src="../leadership page/assests/images/background1.jpg" alt="">
            </div>
        </div>
    </section>

    <section class="youth_reserve_parent">
    <section class="youth_reserve">
        <p>Become part of a vibrant network of passionate leaders committed to building a brighter future for their communities.  Apply to the Leadership Program that aligns with your aspirations and become the leader you were meant to be!</p>
        <a href="#">Reserve a spot &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </section>
    </section>
    
    <div data-include="../Header & Footer/footer.html"></div>
    
    <script src="../Header & Footer/include.js"></script>
    <script src="../Header & Footer/header.js"></script>
    
    <script src="../HomePage/header.js"></script>
    <script>
        document.getElementById('toggle-more').addEventListener('click', function(event) {
            event.preventDefault();
            var hiddenCards = document.querySelectorAll('.program_card.hidden');
            hiddenCards.forEach(function(card) {
                card.classList.toggle('hidden');
            });
            this.textContent = this.textContent.includes('more') ? 'See less programs <i class="arrow up"></i>' : 'See more programs <i class="arrow down"></i>';
        });
    </script>
</body>
</html> 
</body>
</html>