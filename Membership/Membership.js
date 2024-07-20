document.addEventListener('DOMContentLoaded', function() {
    function handleFormSubmission(form) {
        if (!form) return;

        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                showValidationErrors(form);
            } else {
                event.preventDefault();
                sendFormData(form);
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

    function sendFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value || ''; // Ensure optional fields have default values
        });

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(`Server responded with ${response.status}: ${errorData.message}`);
                });
            }
            return response.json();
        })
        .then(data => {
            alert('Thank you for submitting the form!');
            console.log('Success:', data);
            form.reset();
            form.classList.remove('was-validated');
            clearErrorMessages(form);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    handleFormSubmission(document.getElementById('individualForm'));
    handleFormSubmission(document.getElementById('organizationalForm'));
});