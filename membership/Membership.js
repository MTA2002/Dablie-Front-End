// Retrieve the subscription type from session storage instead of the amount
const subscriptionType = sessionStorage.getItem('subscriptionType');

// Display or use the subscription type as needed
if (subscriptionType) {
    const subscriptionTypeElement = document.getElementById('subscription-type');
    if (subscriptionTypeElement) {
        subscriptionTypeElement.textContent = subscriptionType;
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

    // Add hidden input field to store the subscription type
    if (subscriptionType) {
        const form = document.querySelector('form');
        const hiddenSubscriptionInput = document.createElement('input');
        hiddenSubscriptionInput.type = 'hidden';
        hiddenSubscriptionInput.name = 'subscription_type';
        hiddenSubscriptionInput.value = subscriptionType;
        form.appendChild(hiddenSubscriptionInput);
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
            subscription_type: formData.get('subscription_type') // Get the subscription type from hidden field
        };

        const apiUrl = 'http://api.dablie.org/individual_membership_form';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
            if (responseData.status === 'success') {
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
        const paymentApiUrl = 'http://api.dablie.org/payment';

        const paymentData = {
            subscription_type: data.subscription_type,
            payment_mode: 'individual_membership'
        };

        fetch(paymentApiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData)
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