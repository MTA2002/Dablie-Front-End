document.addEventListener('DOMContentLoaded', function() {
    const individualButton = document.getElementById('individualButton');
    const organizationButton = document.getElementById('organizationButton');
    const individualFormSection = document.getElementById('individualFormSection');
    const organizationFormSection = document.getElementById('organizationFormSection');

    individualButton.addEventListener('click', function() {
        individualFormSection.style.display = 'block';
        organizationFormSection.style.display = 'none';
    });

    organizationButton.addEventListener('click', function() {
        individualFormSection.style.display = 'none';
        organizationFormSection.style.display = 'block';
    });

    // Validation and submission handling for both forms
    function handleFormSubmission(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                showValidationErrors(form);
            } else {
                event.preventDefault();
                alert('Thank you for submitting the form!');
                form.reset();
                form.classList.remove('was-validated');
                clearErrorMessages(form);
            }
        }, false);

        form.querySelectorAll('input, textarea, select').forEach((input) => {
            input.addEventListener('invalid', () => {
                input.classList.add('invalid');
            });
            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    input.classList.remove('invalid');
                    clearErrorMessage(input);
                }
            });
        });
    }

    function showValidationErrors(form) {
        form.querySelectorAll('input, textarea, select').forEach((input) => {
            if (!input.validity.valid) {
                const errorElement = document.getElementById(`${input.id}-error`);
                if (errorElement) {
                    if (input.validity.valueMissing) {
                        errorElement.textContent = 'This field is required.';
                    } else if (input.validity.typeMismatch) {
                        errorElement.textContent = 'Please enter a valid value.';
                    } else if (input.validity.patternMismatch) {
                        errorElement.textContent = 'Please match the requested format.';
                    } else {
                        errorElement.textContent = 'Invalid input.';
                    }
                }
            }
        });
    }

    function clearErrorMessages(form) {
        form.querySelectorAll('.error-message').forEach((errorElement) => {
            errorElement.textContent = '';
        });
    }

    function clearErrorMessage(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    handleFormSubmission(document.getElementById('individualForm'));
    handleFormSubmission(document.getElementById('organizationalForm'));
});