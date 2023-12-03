<?php
require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Lost_Password_Handler {
    public function handle($request) {
        $user_data = array(
            'user_login' => sanitize_text_field($request->get_param('username')),
        );

        $result = wp_lostpassword($user_data['user_login']);

        if (is_wp_error($result)) {
            return JSON_Response::error($result->get_error_message(), 400);
        }

        return JSON_Response::success('Password reset email sent successfully');
    }
}
