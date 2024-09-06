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
document.addEventListener('DOMContentLoaded', function () {
  includeHTML();

  function includeHTML() {
      let z, i, elmnt, file, xhttp;
      z = document.querySelectorAll("[data-include]");
      for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          file = elmnt.getAttribute("data-include");
          if (file) {
              xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function () {
                  if (this.readyState == 4) {
                      if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                      if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                      elmnt.removeAttribute("data-include");
                      includeHTML();
                  }
              };
              xhttp.open("GET", file, true);
              xhttp.send();
              return;
          }
      }
  }

  document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);

      const data = {
          first_name: formData.get('first-name'),
          last_name: formData.get('last-name'),
          email: formData.get('email'),
          primary_area_code: formData.get('primary-area-code'),
          phone: formData.get('phone-number'),
          occupation: formData.get('occupation'),
          city: formData.get('city'),
          state: formData.get('state'),
          country: formData.get('country'),
          reasons: formData.get('reasons'),
          how_heard: formData.get('how-heard'),
          interest: formData.get('interest'),
          skills: formData.get('skills'),
          amount: amount // Add the amount from the query parameter
      };

      const apiUrl = 'http://64.112.124.78:8000/individual_membership_form';
      const urlWithQuery = `${apiUrl}?${new URLSearchParams(data).toString()}`;

      fetch(urlWithQuery, {
          method: 'POST',
          headers: {
              'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(responseData => {
          console.log(responseData);
          if (responseData.status === 'success') {
              // alert('Form submitted successfully! Thank You!!!');
              document.querySelector('form').reset();

              // Redirect to payment after form submission
              initiatePayment(data);
          } else {
              alert('There was an error submitting the form. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the form. Please try again.');
      });
  });

  function initiatePayment(data) {
      const paymentApiUrl = `http://64.112.124.78:8100/payment?amount=${data.amount}&payment_mode=individual_membership`;

      fetch(paymentApiUrl, {
          method: 'POST',
          headers: {
              'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(paymentResponse => {
          if (paymentResponse.status === 'pending') {
              const paymentUrl = paymentResponse.checkout_url;
              window.location.href = paymentUrl; // Redirect to payment page
          } else {
              alert('There was an error initiating the payment. Please try again.');
          }
      })
      .catch(error => {
          console.error('Error initiating payment:', error);
          alert('There was an error initiating the payment. Please try again.');
      });
  }
});