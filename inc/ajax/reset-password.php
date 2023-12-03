<?php

function reset_password_callback() {
    $username = $_GET['username'];

    $result = retrieve_password($username); 

    if (is_wp_error($result)) {
        wp_send_json_error($result->get_error_message(), 400);
    } else {
        wp_send_json_success('Password reset email sent successfully');
    }
}

add_action('wp_ajax_reset_password', 'reset_password_callback');
add_action('wp_ajax_nopriv_reset_password', 'reset_password_callback');
