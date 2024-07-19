<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership - Dablie Foundation</title>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="./form.css">
    <link rel="stylesheet" href="../Header & Footer/header.css">
    <link rel="stylesheet" href="../Header & Footer/footer.css">
    <link rel="icon" type="image/x-icon" href="./HomePage/images/Dablie_logo.png">
</head>
<body>
    <div data-include="../Header & Footer/header.html"></div>

    <main>

        <section id="individualFormSection" class="membership-form-section">
            <h2>Individual Membership Form</h2>
            <form id="individualForm" action="submit_individual.php" method="post" novalidate>
        <!-- Form fields as provided -->
        <label for="first-name">First name <span class="required">*</span></label>
        <input type="text" id="first-name" name="first-name" required>
        <div class="error-message" id="first-name-error"></div>

        <label for="last-name">Last name <span class="required">*</span></label>
        <input type="text" id="last-name" name="last-name" required>
        <div class="error-message" id="last-name-error"></div>

        <label for="email">Email address <span class="required">*</span></label>
        <input type="email" id="email" name="email" required>
        <div class="error-message" id="email-error"></div>

        <label for="phone-number">Phone Number <span class="required">*</span></label>
        <div class="phone-input-container">
            <select id="primary-area-code" name="primary-area-code" required>
                <option value="">Select Area Code</option>
                <option value="+1">+1 (USA, Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+91">+91 (India)</option>
                <option value="+251">+251 (Ethiopia)</option>
                <!-- Add more area codes as needed -->
            </select>
            <input type="tel" id="phone-number" name="phone-number" required pattern="[0-9]{9}">
        </div>
        <div class="error-message" id="phone-number-error"></div>

        <label for="occupation">Occupation <span class="required">*</span></label>
        <input type="text" id="occupation" name="occupation" required>
        <div class="error-message" id="occupation-error"></div>

        <label for="city">City <span class="required">*</span></label>
        <input type="text" id="city" name="city" required>
        <div class="error-message" id="city-error"></div>

        <label for="state">State/Region <span class="required">*</span></label>
        <input type="text" id="state" name="state" required>
        <div class="error-message" id="state-error"></div>

        <label for="country">Country <span class="required">*</span></label>
        <input type="text" id="country" name="country" required>
        <div class="error-message" id="country-error"></div>

        <label for="reasons">Briefly describe your reasons for joining the Dabile Foundation</label>
        <textarea id="reasons" name="reasons"></textarea>

        <label for="how-heard">How did you hear about the Dabile Foundation?</label>
        <textarea id="how-heard" name="how-heard"></textarea>

        <label for="interest">What are your interest in joining the Foundation?</label>
        <textarea id="interest" name="interest"></textarea>

        <label for="skills">What skills or experience can you contribute?</label>
        <textarea id="skills" name="skills"></textarea>

        <div class="agreement">
            <p>By submitting this form, you agree to abide by the Dabile Foundation's terms and conditions of membership. You also acknowledge that we may use your contact information to keep you informed about our activities and events.</p>
            <p>Please review your application carefully before submitting it. You can click "Clear" to start over or "Submit" to send your application. Thank you for your interest in the Dabile Foundation!</p>
        </div>

        <div class="buttons">
            <button type="reset" class="clear-btn">Clear</button>
            <button type="submit">Submit</button>
        </div>
    </form>
        </section>
    </main>

    <div data-include="../Header & Footer/footer.html"></div>
    
    <script src="../Header & Footer/include.js"></script>
    <script src="../Header & Footer/header.js"></script>

    <script src="./Membership.js"></script>
</body>
</html>

