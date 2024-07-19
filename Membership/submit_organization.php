<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $formData = [
        'organization_name' => $_POST['organization-name'],
        'website_url' => $_POST['website-url'],
        'primary_area_code' => $_POST['primary-area-code'],
        'phone' => $_POST['phone-number'],
        'address' => $_POST['address'],
        'city' => $_POST['city'],
        'state' => $_POST['state'],
        'country' => $_POST['country'],
        'primary_contact_person' => $_POST['primary-contact'],
        'primary_contact_email' => $_POST['primary-email'],
        'primary_contact_phone' => $_POST['primary-phone'],
        'organization_type' => $_POST['organization-type'],
        "size_of_organization" => $_POST['organization-size'],
        'number_of_employees' => $_POST['number-of-employees'],
        'industry' => $_POST['industry'],
        'mission_description' => $_POST['mission-description'],
        'empowerment_contribution' => $_POST['empowerment-contribution'],
        'joining_reason' => $_POST['joining-reason'],
        'business_forum' => $_POST['business-forum'],
        'business_activities' => $_POST['business-activities'],
        'partnership_goals' => $_POST['partnership-goals'],
        'financial_contribution' => $_POST['financial-contribution'],
        'financial_level' => $_POST['financial-level']
    ];

    $apiUrl = 'http://64.112.124.78:8000/organization_membership_form';
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
