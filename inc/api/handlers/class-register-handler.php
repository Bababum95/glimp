<?php

require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Register_Handler {

    public function handle(WP_REST_Request $request) {
        $data = $request->get_params();

        $username = explode('@', $data['email'])[0];

        if (email_exists($data['email'])) {
            return JSON_Response::error('User already exists', 409);
        }

        if (username_exists($username)) {
            $username = $data['first_name'] . '-' . $data['last_name'];
        }

        if (username_exists($username)) {
            $username = $username . rand(1, 100);
        }

        $user_id = wc_create_new_customer($data['email'], $username, $data['password']);

        if (is_wp_error($user_id)) {
            return JSON_Response::error($user_id->get_error_message(), 400);
        }

        $user_meta = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'billing_first_name' => $data['first_name'],
            'billing_last_name' => $data['last_name'],
            'shipping_first_name' => $data['first_name'],
            'shipping_last_name' => $data['last_name'],
        ];

        foreach ($user_meta as $meta_key => $meta_value) {
            if (!empty($meta_value)) {
                update_user_meta($user_id, $meta_key, $meta_value);
            }
        }


        $user = wp_signon([
            'user_login'    => $data['email'],
            'user_password' => $data['password'],
            'remember'      => true,
        ], false);
        
        if (is_wp_error($user)) {
            return JSON_Response::error($user->get_error_message(), 403);
        }

        return JSON_Response::success('Registration successful', [
            'user_id' => $user_id,
        ]);
    }
}
