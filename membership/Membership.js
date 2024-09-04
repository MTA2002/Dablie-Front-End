// Function to get query parameter by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Use the function to retrieve the 'amount' parameter
  const amount = getQueryParameter('amount');
  
  // Display or use the amount as needed
  if (amount) {
    const paymentAmountElement = document.getElementById('payment-amount');
    if (paymentAmountElement) {
      paymentAmountElement.textContent = 'ETB ' + amount + '/year';
    }
  }
  
  // Unified DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission handling
    function handleFormSubmission(form) {
      if (!form) return;
  
      form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add('was-validated');
          showValidationErrors(form);
        } else {
          initiatePayment(form);  // Initiate payment first
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
  
    function initiatePayment(form) {
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value || ''; // Ensure optional fields have default values
  });

  // Add the retrieved 'amount' parameter to the data
  data.amount = amount;

  const apiUrl = `http://64.112.124.78:8100/payment?amount=${amount}&payment_mode=individual_membership`; // Use backticks for template literals

  // Send payment initiation request to the backend
  fetch(apiUrl, {
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
  .then(responseData => {
    if (responseData.status === 'pending') {
      // Redirect to payment page
      const paymentUrl = responseData.checkout_url;
      window.location.href = paymentUrl;
    } else {
      alert('There was an error initiating the payment. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error initiating the payment. Please try again.');
  });
}
    function submitDataToBackend(data) {
      fetch('http://64.112.124.78:8000/individual_membership_form', {  // Replace with your backend endpoint
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(responseData => {
        alert('Form submitted successfully after payment!');
        console.log('Success:', responseData);
      })
      .catch(error => {
        console.error('Error submitting data to backend:', error);
      });
    }
  
    handleFormSubmission(document.getElementById('individualForm'));
    handleFormSubmission(document.getElementById('organizationalForm'));
  });
  