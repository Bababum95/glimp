<?php

function subscribe_email() {
    $email = $_GET['email'];
    $groups = ['your_group'];
    $api_key = 'Bearer YOUR_API_KEY';

    $data = array(
        'email' => $email,
        'groups' => $groups,
    );
    $headers = array(
        'Content-Type' => 'application/json',
        'Authorization' => $api_key,
    );
    $args = array(
        'headers' => $headers,
        'body' => json_encode($data),
    );

    $response = wp_remote_post('https://connect.mailerlite.com/api/subscribers', $args);
    if (is_wp_error($response)) {
        $error_message = $response->get_error_message();
        wp_send_json_error($error_message);
    } else {
        wp_send_json_success('Subscribed.');
    }
}


add_action('wp_ajax_subscribe_email', 'subscribe_email');
add_action('wp_ajax_nopriv_subscribe_email', 'subscribe_email');