<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership - Dablie Foundation</title>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="Membership.css">
    <link rel="stylesheet" href="../Header & Footer/header.css">
    <link rel="stylesheet" href="../Header & Footer/footer.css">
    <link rel="icon" type="image/x-icon" href="./HomePage/images/Dablie_logo.png">
</head>
<body>
    <!-- <div data-include="../Header & Footer/header.html"></div> -->

    <main>
        <section class="membership-selection">
            <h1>Become a Member</h1>
            <p>Please select the type of membership:</p>
            <div class="membership-buttons">
                <button id="individualButton" class="membership-button">Individual</button>
                <button id="organizationButton" class="membership-button">Organization</button>
            </div>
        </section>

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
            <input type="tel" id="phone-number" name="phone-number" required pattern="[0-9]{10}">
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

        <section id="organizationFormSection" class="membership-form-section">
            <h2>Organizational Membership Form</h2>
            <form id="organizationalForm" action="submit_organization.php" method="post" novalidate>
    <!-- Form fields as provided -->
    <label for="organization-name">Organization name <span class="required">*</span></label>
    <input type="text" id="organization-name" name="organization-name" required>
    <div class="error-message" id="organization-name-error"></div>

    <label for="website-url">Website URL</label>
    <input type="url" id="website-url" name="website-url" pattern="https?://.+">
    <div class="error-message" id="website-url-error"></div>

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
        <input type="tel" id="phone-number" name="phone-number" required pattern="[0-9]{10}">
    </div>
    <div class="error-message" id="phone-number-error"></div>

    <label for="address">Address <span class="required">*</span></label>
    <input type="text" id="address" name="address" required>
    <div class="error-message" id="address-error"></div>

    <label for="city">City <span class="required">*</span></label>
    <input type="text" id="city" name="city" required>
    <div class="error-message" id="city-error"></div>

    <label for="state">State/Region <span class="required">*</span></label>
    <input type="text" id="state" name="state" required>
    <div class="error-message" id="state-error"></div>

    <label for="country">Country <span class="required">*</span></label>
    <input type="text" id="country" name="country" required>
    <div class="error-message" id="country-error"></div>

    <label for="primary-contact">Primary Contact Person <span class="required">*</span></label>
    <input type="text" id="primary-contact" name="primary-contact" required>
    <div class="error-message" id="primary-contact-error"></div>

    <label for="primary-email">Primary Contact Email <span class="required">*</span></label>
    <input type="email" id="primary-email" name="primary-email" required>
    <div class="error-message" id="primary-email-error"></div>

    <label for="primary-phone">Primary Contact Phone Number <span class="required">*</span></label>
    <div class="phone-input-container">
        <select id="primary-area-code" name="primary-area-code" required>
            <option value="">Select Area Code</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
            <option value="+251">+251</option>
            <!-- Add more area codes as needed -->
        </select>
        <input type="tel" id="primary-phone" name="primary-phone" required pattern="[0-9]{10}">
    </div>
    <div class="error-message" id="primary-phone-error"></div>

    <label for="organization-type">Organization Type <span class="required">*</span></label>
    <select id="organization-type" name="organization-type" required>
        <option value="">Select Type</option>
        <option value="non-profit">Non-Profit</option>
        <option value="for-profit">For-Profit</option>
        <option value="government">Government</option>
        <option value="other">Other</option>
    </select>
    <div class="error-message" id="organization-type-error"></div>

    <label for="organization-size">What is the size of your organization? <span class="required">*</span></label>
    <select id="organization-size" name="organization-size" required>
        <option value="">Select Size (Revenue)</option>
        <option value="small"> < 10 million ETB</option>
        <option value="medium"> 10 - 50 million ETB</option>
        <option value="large"> > 50 million ETB</option>
    </select>
    <div class="error-message" id="organization-size-error"></div>

    <label for="number-of-employees">Number of Employees</label>
    <input type="number" id="number-of-employees" name="number-of-employees">
    <div class="error-message" id="number-of-employees-error"></div>

    <label for="industry">Industry <span class="required">*</span></label>
    <input type="text" id="industry" name="industry" required>
    <div class="error-message" id="industry-error"></div>

    <label for="mission-description">Briefly describe your organization's mission and activities</label>
    <textarea id="mission-description" name="mission-description"></textarea>
    <div class="error-message" id="mission-description-error"></div>

    <label for="empowerment-contribution">How does your organization contribute to the empowerment of the community?</label>
    <textarea id="empowerment-contribution" name="empowerment-contribution"></textarea>
    <div class="error-message" id="empowerment-contribution-error"></div>

    <label for="joining-reason">Why are you interested in joining the Dabile Foundation?</label>
    <textarea id="joining-reason" name="joining-reason"></textarea>
    <div class="error-message" id="joining-reason-error"></div>

    <label for="business-forum">Are you interested in applying for the Business Forum Membership option? (Yes/No)</label>
    <div class="radio-group">
        <input type="radio" id="business-forum-yes" name="business-forum" value="yes" required>
        <label for="business-forum-yes" class="radio-label">Yes</label>
        <input type="radio" id="business-forum-no" name="business-forum" value="no">
        <label for="business-forum-no" class="radio-label">No</label>
    </div>
    <div class="error-message" id="business-forum-error"></div>

    <label for="business-activities">Briefly describe your organization's business activities:</label>
    <textarea id="business-activities" name="business-activities"></textarea>
    <div class="error-message" id="business-activities-error"></div>

    <label for="partnership-goals">What are your organization's goals in partnering with the Dabile Foundation?</label>
    <textarea id="partnership-goals" name="partnership-goals"></textarea>
    <div class="error-message" id="partnership-goals-error"></div>

    <label for="financial-contribution">Are you willing to contribute financially to the Foundation's work? (Yes/No)</label>
    <div class="radio-group">
        <input type="radio" id="financial-contribution-yes" name="financial-contribution" value="yes" required>
        <label for="financial-contribution-yes" class="radio-label">Yes</label>
        <input type="radio" id="financial-contribution-no" name="financial-contribution" value="no">
        <label for="financial-contribution-no" class="radio-label">No</label>
    </div>
    <div class="error-message" id="financial-contribution-error"></div>

    <label for="financial-level">If yes, please indicate your preferred level of financial contribution</label>
    <textarea id="financial-level" name="financial-level"></textarea>
    <div class="error-message" id="financial-level-error"></div>

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

    <!-- <div data-include="../Header & Footer/footer.html"></div>
    
    <script src="../Header & Footer/include.js"></script>
    <script src="../Header & Footer/header.js"></script> -->

    <script src="Membership.js"></script>
</body>
</html>

