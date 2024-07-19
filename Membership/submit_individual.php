<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formData = [
        'first_name' => $_POST['first-name'],
        'last_name' => $_POST['last-name'],
        'email' => $_POST['email'],
        'primary_area_code' => $_POST['primary-area-code'],
        'phone' => $_POST['phone-number'],
        'occupation' => $_POST['occupation'],
        'city' => $_POST['city'],
        'state' => $_POST['state'],
        'country' => $_POST['country'],
        'reasons' => $_POST['reasons'],
        'how_heard' => $_POST['how-heard'],
        'interest' => $_POST['interest'],
        'skills' => $_POST['skills']
    ];

    $apiUrl = 'http://64.112.124.78:8000/individual_membership_form';
    $urlWithQuery = $apiUrl . '?' . http_build_query($formData);


    $ch = curl_init($urlWithQuery);


    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('accept: application/json'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, ''); 
    


    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        $response = [
            'status' => 'error',
            'message' => 'cURL error: ' . curl_error($ch)
        ];
        echo json_encode($response);
    } else {
        echo $response;
    }

    curl_close($ch);
} else {
    http_response_code(405);
    $response = [
        'status' => 'error',
        'message' => 'Method Not Allowed'
    ];
    echo json_encode($response);
}
?>
