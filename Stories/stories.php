<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stories</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="../Header & Footer/header.css">
    <link rel="stylesheet" href="../Header & Footer/footer.css">
    <link rel="stylesheet" href="./stories.css">
    <link rel="icon" type="image/x-icon" href="../HomePage/images/Dablie_logo.png">

    <style>
        .program_card.hidden {
            display: none;
        }
    </style>
</head>
<div data-include="../Header & Footer/header.html"></div>

    <section class="stories_section">
        <h1>Latest <span>Stories</span></h1>
        <div class="stories_boxes">

        <?php
$url = 'http://64.112.124.78:8000/news?page=1&pagination=6';
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
} else {
    
    $response = json_decode($response);
    if (json_last_error() === JSON_ERROR_NONE) {
        foreach ($response->articles as $article) {
            ?>
            <div class="stories_box">
                <img src=<?php echo "http://64.112.124.78/data/images/" . $article->image ?> alt="">
                <label for=""><?php echo $article->headline ?></label>
                <p><?php echo $article->description ?>e</p>
            </div>
            <?php
        }
    } else {
        echo 'Error decoding JSON: ' . json_last_error_msg();
    }
}
curl_close($ch);
?>
        </div>
    </section>


    <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <span><a href="#">4</a></span>
        <span><a href="#">5</a></span>
        <a href="#">&raquo;</a>
    </div>

    <div data-include="../Header & Footer/footer.html"></div>
    
    <script src="../Header & Footer/include.js"></script>
    <script src="../Header & Footer/header.js"></script>
    
    <script src="../HomePage/header.js"></script>
</body>
</html>